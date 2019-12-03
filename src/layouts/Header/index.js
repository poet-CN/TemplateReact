import React, { Component } from 'react';
import styles from './index.scss';

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <p>头部</p>
      </div>
    );
  }
}

export default Header;
