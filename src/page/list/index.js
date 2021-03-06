import React from 'react';
import { Table } from 'antd';
import { connect } from 'dva';


class List extends React.Component {
  columns = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
    {
      title: '链接',
      dataIndex: 'url',
      render: value => <a href={value}>{value}</a>,
    },
  ];
  render() {
    const { cardsList, cardsLoading } = this.props;

    return (      <div>
        hello world List
        <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id" />
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'cards/queryList',
    });
  }
}

function mapStateToProps(state) {
  return {
    cardsList: state.cards.cardsList,
    cardsLoading: state.loading.effects['cards/queryList'],
  };
}

export default connect(mapStateToProps)(List);