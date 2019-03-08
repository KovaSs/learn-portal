import React from 'react'
import { Row, Col } from 'antd';
import { Icon } from 'antd';
import "./menuItem.scss"

const MenuItem = ({itemInfo}) => {
  const {title, description, icon, alt} = itemInfo
  return (
    <Row className="menu-item">
      <Col className="menu-item__first" span={1}><Icon type="check"/></Col>
      <Col align="center" className="menu-item__middle" span={2}>
        <img src={process.env.PUBLIC_URL + `${icon}`} alt={alt}/>
      </Col>
      <Col span={9}>
        <div className="menu-item__last">
          <h2>{title}</h2>
          <div>{description}</div>
        </div>
      </Col>
    </Row>
  )
}

export default MenuItem