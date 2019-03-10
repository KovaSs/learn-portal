import React, { Component } from 'react'
import PlyrComponent from '../../PlyrComponent'
import { Row, Col } from 'antd';
import './page-video.scss';

class PageVideo extends Component {
  state = {
    videoUrl : '',
    videoProvider : ''
  }

  updateVideoUrl = () => {
    const {mainVideo : {url, provider}} = this.props
    this.setState(({videoUrl, videoProvider}) => {
      return {
        videoUrl : url,
        videoProvider : provider
      }
    })
    console.log(`update video`)
  }

  componentWillMount() {
    this.updateVideoUrl()
  }

  componentWillReceiveProps(nextProps) {
    const {url, provider} = nextProps.mainVideo
    if(url !== this.state.videoUrl) {
      this.setState(({videoUrl, videoProvider}) => {
        return {
          videoUrl : url,
          videoProvider : provider
        }
      })
    }
  }

  render() {
    const { mainVideo } = this.props
    const { videoUrl, videoProvider } = this.state;
    return (
      <div className="lesson-content">
        <Row>
          <Col span={20} offset={2}>
            <div className="lesson-content__video_title">
              <h2>{ mainVideo.title }</h2>
            </div>
            <div className="lesson-content__video">
              <PlyrComponent videoUrl={videoUrl} videoProvider={videoProvider}/>
            </div>
          </Col>
          <Col>
          </Col>
        </Row>
      </div>
    )
  }
}

export default PageVideo