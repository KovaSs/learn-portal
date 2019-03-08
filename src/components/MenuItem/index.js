import React from 'react'
import { Row, Col } from 'antd';
import { Icon } from 'antd';
import "./menuItem.scss"

const MenuItem = () => {
  return (
    <Row className="menu-item">
      <Col align="center" className="menu-item__first" span={1}><Icon type="check"/></Col>
      <Col align="center" className="menu-item__middle" span={2}>
        <img src={process.env.PUBLIC_URL + '/img/icon/icon-task-5n.png'} alt="task-5"/>
      </Col>
      <Col className="menu-item__last" span={6}>
        <h2>Урок №1</h2>
        <div>Работа верстальщика с графикой</div>
      </Col>
    </Row>
  )
}

export default MenuItem