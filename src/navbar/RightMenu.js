import React, { Component } from 'react';
import { Menu } from 'antd';
import Login from './Login.js';

class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <Login />
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/">Inscription</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default RightMenu;