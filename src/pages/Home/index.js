import React, { Component } from 'react';
import { connect } from 'dva';

@connect(({ global, home }) => ({ global, home }))
class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/getMockData',
    });
    dispatch({
      type: 'home/getName',
    });
  }

  render() {
    const { global: { a }, home: { name } } = this.props;
    return (
      <div>
        <div>{a}</div>
        <div>{name}</div>
      </div>
    );
  }
}

export default Home;
