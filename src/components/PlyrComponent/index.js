import React, {Component} from 'react';
import plyr from 'plyr';
import 'plyr/dist/plyr.css';

class PlyrComponent extends Component {
  state = {
    videoUrl : '',
    videoProvider : ''
  }

  updateVideoUrl = () => {
    const {videoUrl, videoProvider} = this.props
    this.setState({
      videoUrl : videoUrl,
      videoProvider : videoProvider
    })
  }

  componentWillMount() {
    this.updateVideoUrl()
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    const { videoUrl,  videoProvider} = nextProps
    if(videoUrl !== this.state.videoUrl) {
      this.setState({
        videoUrl: videoUrl,
        videoProvider: videoProvider
      })
    }
  }

  componentDidMount() {
    const options = {
      captions: false,
      controls: [
      'play',
      'progress',
      'current-time',
      'duration',
      'mute',
      'volume',
      'pip',
      'airplay',
      'fullscreen',
      'settings'
      ]
    };
    this.player = plyr.setup('#plyr-player', options);
  }

  componentWillUnmount() {
    if (this.player.length > 0) {
      for (const playerEl of this.player) {
        playerEl.destroy();
      }
    }
  }

  render() {
    const { videoUrl, videoProvider } = this.state;
    return (
      <div
          id="plyr-player"
          data-plyr-provider={videoProvider}
          data-plyr-embed-id={videoUrl} 
      />
    );
  }
}

export default PlyrComponent;