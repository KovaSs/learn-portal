import React, { Component } from 'react'
import Plyr from 'react-plyr';
import { Row, Col } from 'antd';
import './page-video.scss';
import 'plyr/dist/plyr.css';

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
    const youtubeId = url.match(/\w+:\/\/\w+.\w+.\w+\/\w+\/(\w+)/)
    if(url !== this.state.videoUrl) {
      this.setState(({videoUrl, videoProvider}) => {
        return {
          videoUrl : youtubeId[1],
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
              <Plyr type={videoProvider}  videoId={videoUrl}/>
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