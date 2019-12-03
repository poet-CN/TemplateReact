import React, { Component } from 'react';
import { ConfigProvider  } from 'antd';

import Header from './Header';
import Footer from './Footer';

import 'normalize.css/normalize.css';
import styles from './index.scss';

class BasicLayout extends Component {
  getLayOut = () => {
    return (
      <div>
        <Header/>
        <div>{this.props.children}</div>
        <Footer/>
      </div>
    )
  };

  render() {
    return (
      <ConfigProvider >
        {this.getLayOut()}
      </ConfigProvider >
    );
  }
}

export default BasicLayout;
