import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Icon } from 'antd';

const SubMenuContainer = ({lessons}) => {
  const SubMenu = Menu.SubMenu;

  /* Меню Web-developer */
  const menuNawItem = lessons.map(item => {
    return (
      <Menu.Item key={item.id}>
        <Link to={`/web-dev/${item.id}`}>
          Lesson {item.num}
        </Link>
      </Menu.Item>
    )
  })

  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <SubMenu
        key="sub1"
        title={
          <span className="sub-menu">
            <Link to='/web-dev'>
              <Icon type="chrome"/>
              <span>
                Web-deweloper
              </span>
            </Link>
          </span>
        }
      >
        { menuNawItem }
      </SubMenu>
      <SubMenu
        key="sub2"
        title={<span><Icon type="solution" /><span>JS-deweloper</span></span>}
      >
        <Menu.Item key="5">Lesson 1</Menu.Item>
        <Menu.Item key="6">Lesson 2</Menu.Item>
        <Menu.Item key="7">Lesson 3</Menu.Item>
        <Menu.Item key="8">Lesson 4</Menu.Item>
      </SubMenu>
    </Menu>
  )
}

export default SubMenuContainer
