import React from 'react';
import YouTube from 'react-youtube';
 
class SongsButton extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: '350',
      width: '600',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
      
    };
    const {videoId}=this.props
    return <YouTube videoId={videoId} opts={opts} onReady={this._onReady} className="video-prop"/>;
  }
 
  
}

export default SongsButton;