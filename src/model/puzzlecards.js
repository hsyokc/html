import request from '../util/request';  // request 是 demo 项目脚手架中提供的一个做 http 请求的方法，是对于 fetch 的封装，返回 Promise

const delay = (millisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
};

export default {
  namespace: 'puzzlecards',
  state: {
    data: [],
    counter: 0,
      },
			
  effects: {
    *queryInitCards(_, sagaEffects) {
      const { call, put } = sagaEffects;
      // const endPointURI = 'http://114.116.89.193:8999/test/cardList';//不用mock
      // const endPointURI='/api/img';
      const endPointURI='/dev/random_joke'

      const puzzle = yield call(request, endPointURI);//获取服务端数据。
      yield put({ type: 'addNewCard', payload: puzzle });//添加一个卡片数据。这个会触发 reducer 的执行

      yield call(delay,3000);//暂停 3 s.

      const puzzle2 = yield call(request, endPointURI);//第二次获取服务端数据。
      yield put({ type: 'addNewCard', payload: puzzle2 });
			
			//  yield call(delay,3000);
			
			// const puzzle3 = yield call(request, endPointURI);
			// yield put({ type: 'addNewCard', payload: puzzle3 });
    }
  },
  reducers: {
    addNewCard(state, { payload: newCard }) {
      const nextCounter = state.counter + 1;
      const newCardWithId = { ...newCard, id: nextCounter };
      const nextData = state.data.concat(newCardWithId);
      return {
        data: nextData,
        counter: nextCounter,
      };
    }
  },
};