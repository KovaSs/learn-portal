import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Icon } from 'antd';

const SubMenuContainer = () => {
  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1">
        <span className="sub-menu">
          <Link to='/web-dev'>
            <Icon type="chrome" />
            <span>Web-deweloper</span>
          </Link>
        </span>
      </Menu.Item>
      <Menu.Item key="2">
        <span className="sub-menu">
          <Icon type="solution" />
          <span>JS-deweloper</span>
        </span>
      </Menu.Item>
    </Menu>
  )
}

export default SubMenuContainer
