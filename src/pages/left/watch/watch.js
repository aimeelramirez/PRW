import YouTube from 'react-youtube';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { backup } from "./backup";
import './YoutubeVideo'
// import Video from './../../../components/video/video'

const Watch = () => {
  let history = useHistory()
  // let intitalState = ""
  //console.log(history)
  let [videoId, setVideoId] = useState();


  let [, setHistory] = useState({})
  let [videosId, setVideosId] = useState();

  let [player, setPlayer] = useState(null);
  const opts = {
    id: "ytplayer",
    height: '390',
    width: '640',
    frameborder: "0",
    playerVars: {
      autoplay: 1
    },
  };

  const onReady = (event) => {
    if (history.location.state.videos.length > 0) {
      //console.log(history)
      setVideosId({ videos: history.location.state.videos })
      // //console.log("length: ", history.location.state.video.length)
      // setVideoId(videosId[0].contentDetails.videoId)
      setVideoId(history.location.state.videos[0].contentDetails.videoId)
      // //console.log("clicked", videoId.videos.contentDetails.videoId)

      // videoId = videosId[0].contentDetails.videoId
      //console.log(`YouTube Player object for videoId: "${videoId}" has been saved to state.`);

    }
    setPlayer(event.target);


  };

  const onPlayVideo = () => {
    player.playVideo();
  };

  const onPauseVideo = () => {
    player.pauseVideo();
  };

  const onChangeVideo = () => {
    //console.log(videosId.videos)
    for (let i = 0; i < videosId.videos.length; i++) {
      //this is on backup data
      if (i === videosId.videos.length - 1 && i >= 5) {
        // //console.log("click", i)
        return setVideoId(videosId.videos[0].contentDetails.videoId);
      }
      if (i > videosId.videos.length - 1 && videoId !== videosId.videos[i].contentDetails.videoId) {
        // //console.log(videoId)
        return setVideoId(videoId)
      }
      else if (i < videosId.videos.length - 1 && videoId === videosId.videos[i].contentDetails.videoId) {
        // //console.log(`click here ${i} `, videosId.videos.length)
        return setVideoId(videosId.videos[i + 1].contentDetails.videoId);
      }
    }

  };
  if (history.location.state === undefined) {
    //console.log(historyState)
    setHistory({ videos: [] })
    // return history.push("/loadYt", { videos: [] });
  } else if (history.location.state.videos !== undefined) {
    //console.log(history.location.state.videos.length)

    return (<div className="videos">
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />

      <div><button type="button" onClick={onPlayVideo} disabled={!player}>
        Play
      </button>
        <button type="button" onClick={onPauseVideo} disabled={!player}>
          Pause
      </button>
        <button type="button" onClick={onChangeVideo} disabled={!player}>
          Change Video
      </button></div>
    </div>
    )
  }
  if (backup.length > 0 && history.location.state === undefined) {
    setHistory({ videos: backup })
    history.push(window.location.pathname, { videos: backup });
  }
  if (backup.length > 0 && history.location.state.videos.length > 6) {
    //console.log(history.location.state.videos)
    return (
      <div className="videos">
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />

        <div><button type="button" onClick={onPlayVideo} disabled={!player}>
          Play
      </button>
          <button type="button" onClick={onPauseVideo} disabled={!player}>
            Pause
      </button>
          <button type="button" onClick={onChangeVideo} disabled={!player}>
            Change Video
      </button>
        </div>
      </div >

    );
  };
}

export default Watch;
