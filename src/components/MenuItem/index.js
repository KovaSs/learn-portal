import React from 'react'
import { Row, Col } from 'antd';
import "./menuItem.css"

const MenuItem = () => {
  return (
    <Row className="menu-item">
      <Col className="menu-item__first" span={1}>col-1</Col>
      <Col className="menu-item__middle" span={3}>col-3</Col>
      <Col className="menu-item__last" span={8}>col-8</Col>
    </Row>
  )
}

export default MenuItem