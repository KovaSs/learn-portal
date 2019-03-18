import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import MenuItemList from '../MenuItemList';
import LessonPage from '../LessonPage';
import "./app.scss"

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  state = {
    collapsed: true,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  }

  onChangeRouteName = route => {
    this.setState({ nameRoute : route })
  }

  render() {
    const { lessons } = this.props
    const date = new Date()
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
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <Link to="/">
              <div className="logo" />
            </Link>
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
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Главная</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {/* <Route path='/' exact component={MainPage}/> */}
                <Route path='/web-dev' exact render={({match}) => {
                  return <MenuItemList lesson={lessons}/>
                }}/>
                <Route path='/web-dev/:id' render={({match}) => {
                  const {id} = match.params;
                  const data = lessons.filter(item => item.id === id)
                  return <LessonPage data={data[0]} maxLesson={lessons.length}/>
                }}/>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              <b>ISAEV.STORE</b> ©{ date.getFullYear() } Created by Den Isaev
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    lessons: state.lessons.data
  }
}

export default connect(mapStateToProps)(App);