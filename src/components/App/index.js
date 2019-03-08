import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import MenuItemList from '../MenuItemList';
import { data } from './mock.js';
import "./app.scss"

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    const { web : { lessons } } = data
    const date = new Date()
    const menuNawItem = lessons.map(item => {
      return <Menu.Item key={item.id}>Lesson {item.num}</Menu.Item>
    })
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu
              key="sub1"
              title={<span><Icon type="chrome"/><span>Web-deweloper</span></span>}
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
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Главная</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <MenuItemList lesson={lessons}/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <b>ISAEV.STORE</b> ©{ date.getFullYear() } Created by Den Isaev
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
