import React from 'react'
import { Row, Col } from 'antd';
import { Icon } from 'antd';
import {Link} from 'react-router-dom';
import "./menuItem.scss"

const MenuItem = ({itemInfo}) => {
  const {title, description, icon, alt, id} = itemInfo
  return (
    <Link to={`/web-dev/${id}`}>
      <Row className="menu-item">
        <Col className="menu-item__first" span={1}><Icon type="check"/></Col>
        <Col align="center" className="menu-item__middle" span={2}>
          <img src={icon} alt={alt}/>
        </Col>
        <Col span={9}>
          <div className="menu-item__last">
            <h2>{title}</h2>
            <div>{description}</div>
          </div>
        </Col>
      </Row>
    </Link>
  )
}

export default MenuItem