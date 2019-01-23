export default {
    namespace: 'cards',
    state: {
        cardsList: [{
            id: 1,
            name: '张三',
            desc: '学习委员',
            url: 'https://www.baidu.com',
           
            
        }, {
            id: 2,
            "name": '李四',
            "desc": '课代表',
            "url": 'https://www.google.com'
        },
        {
          id: 3,
          name: '王五',
          desc: '班长',
          url: 'https://www.google.com'
      },
      {
        id: 4,
        name: '张6',
        desc: '学习委员',
        url: 'https://www.baidu.com',
       
        
    }, {
        id: 5,
        "name": '李6',
        "desc": '课代表',
        "url": 'https://www.google.com'
    },
    {
      id: 6,
      name: '王8',
      desc: '班长',
      url: 'https://www.google.com'
  },
  {
    id: 7,
    name: '张9',
    desc: '学习委员',
    url: 'https://www.baidu.com',
   
    
}, {
    id: 8,
    "name": '李10',
    "desc": '课代表',
    "url": 'https://www.google.com'
},
{
  id: 9,
  name: '王11',
  desc: '班长',
  url: 'https://www.google.com'
},
{
id: 10,
name: '张12',
desc: '学习委员',
url: 'https://www.baidu.com',


}, {
id: 11,
"name": '李13',
"desc": '课代表',
"url": 'https://www.google.com'
},
{
id: 12,
name: '王14',
desc: '班长',
url: 'https://www.google.com'
},
        ]
    },
    reducers: {
        queryList(state, { }) {
            return {
                ...state
            };
        }
    },
}
