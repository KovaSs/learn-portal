import React, { Component } from 'react'
// import Plyr from 'react-plyr';
// import PlyrComponent from '../../PlyrComponent';
import ReactPlayer from 'react-player'
import { Row, Col } from 'antd';
import './page-video.scss';
import 'plyr/dist/plyr.css';

class PageVideo extends Component {
  state = {
    videoUrl : '',
    videoProvider : '',
    // videoId: '',
  }

  updateVideoUrl = () => {
    const {mainVideo : {url, provider}} = this.props
    this.setState(({videoUrl, videoProvider}) => {
      // const id = url.match(/\w+:\/\/\w+.\w+.\w+\/\w+\/(\w+)/)
      return {
        // videoId: id[1],
        videoUrl : url,
        videoProvider : provider
      }
    })
  }

  componentWillMount() {
    this.updateVideoUrl()
  }

  componentWillReceiveProps(nextProps) {
    const {url, provider} = nextProps.mainVideo
    if(url !== this.state.videoUrl) {
      this.setState(({videoUrl, videoProvider, videoId}) => {
        // const id = url.match(/\w+:\/\/\w+.\w+.\w+\/\w+\/(\w+)/)
        return {
          // videoId: id[1],
          videoUrl : url,
          videoProvider : provider
        }
      })
    }
  }

  render() {
    const { mainVideo } = this.props
    /** Plyr */
    // const {videoId, videoProvider } = this.state;
    /** PlyrComponent */
    // const {videoUrl, videoProvider } = this.state;
    /** ReactPlayer */
    const {videoUrl } = this.state;
    return (
      <div className="lesson-content">
        <Row>
          <Col span={20} offset={2}>
            <div className="lesson-content__video_title">
              <h2>{ mainVideo.title }</h2>
            </div>
            <div className="lesson-content__video">
              <ReactPlayer 
                url={videoUrl} 
                controls
                style={{margin: '0 auto'}}
                config={{
                  youtube: {
                    playerVars: { showinfo: 0 }
                  },
                }}
              />
              {/* <PlyrComponent videoProvider={videoProvider} videoUrl={videoUrl} /> */}
              {/* <Plyr type={videoProvider} videoId={videoId} /> */}
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