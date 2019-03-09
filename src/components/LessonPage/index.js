import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import "./lessonPage.scss"

class LessonPage extends Component {
  render() {
    const { data ,data : {title, description, num}, maxLesson} = this.props
    console.log(`Page-data ->`, data, this.props)
    return (
      <Row className="lesson-page">
        <Col span={20} offset={2} >
          <div className="lesson-header">
            <div className="lesson-header__title"><h2>{title}</h2></div>
            <div className="lesson-header__desc">{description}</div>
            <hr/>
            <div>{num} из {maxLesson} уроков</div>
            <Row>
              <Col span={8} className="lesson-header__prev">
                { num <= 1 ? 
                  null
                  : 
                  <Link to={`/web-dev/web-les-${num - 1}`}>
                    Предыдущий урок
                  </Link>
                }
              </Col>
              <Col span={8} offset={8} className="lesson-header__next">
                { num !== maxLesson ? 
                  <Link to={`/web-dev/web-les-${num + 1}`}>
                    Следующий урок
                  </Link>
                  :
                  null
                }
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm={12} lg={12} style={{ background: 'red' }}>
        dsfsdfsdgfdshg stfdhg аыпр вапр вапр вапр вапр вапр вапр авпр а
        </Col>
      </Row>
    )
  }
}

export default withRouter(LessonPage)
