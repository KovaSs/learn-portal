import React, {Component} from 'react';
import plyr from 'plyr';
import 'plyr/dist/plyr.css';

class PlyrComponent extends Component {
  state = {
    videoUrl : '',
    videoProvider : '',
    options : {
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
    }
  }

  updateVideoUrl = () => {
    const {videoUrl, videoProvider} = this.props
    const { options } = this.state
    this.player = plyr.setup('#plyr-player', options);
    this.setState({
      videoUrl : videoUrl,
      videoProvider : videoProvider
    })
  }

  destroyPlayer = () => {
    if (this.player.length > 0) {
      for (const playerEl of this.player) {
        playerEl.pause();
        setTimeout(() => {
          playerEl.destroy();
        }, 300);
        console.log(`destroy player`, playerEl)
      }
    }
  }

  componentWillMount() {
    this.updateVideoUrl()
  }

  componentWillReceiveProps(nextProps) {
    console.log(`update player ->`, this.player)
    const { videoUrl,  videoProvider} = nextProps
    if(videoUrl !== this.state.videoUrl) {
      this.setState({
        videoUrl: videoUrl,
        videoProvider: videoProvider
      })
    }
  }

  componentDidMount() {
    const { options } = this.state
    this.player = plyr.setup('#plyr-player', options);
  }

  componentWillUnmount() {
    if(this.player.length > 0) {
      for (const playerEl of this.player) {
        playerEl.pause();
        setTimeout(() => {
          this.playerEl.destroy();
        }, 300)
      }
    }
    console.log(`unmount`)
  }

  render() {
    const { videoUrl, videoProvider } = this.props;
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