import YouTube from 'react-youtube';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { backup } from "./backup";
import './YoutubeVideo'
// import Video from './../../../components/video/video'

const Watch = () => {
  let history = useHistory()
  // let intitalState = ""
  let [videoId, setVideoId] = useState();


  let [historyState, setHistory] = useState({})
  let [videosId, setVideosId] = useState(backup);

  let [player, setPlayer] = useState(null);
  const opts = {
    id: "ytplayer",
    height: '390',
    width: '640',
    frameborder: "0",
    playerVars: {
      autoplay: 1,
      origin: "https://localhost:3000" || "http://localhost:3000",
    },
  };

  const onReady = (event) => {
    if (history.location.state.video.length > 0) {
      setVideosId({ video: history.location.state.video })
      // console.log("length: ", history.location.state.video.length)
      setVideoId(videosId[0].contentDetails.videoId)
      videoId = videosId[0].contentDetails.videoId
      console.log(`YouTube Player object for videoId: "${videoId}" has been saved to state.`);

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
    console.log("clicked")
    for (let i = 0; i < videosId.video.length - 1; i++) {
      if (i >= videosId.video.length - 2 && videoId !== videosId.video[i].contentDetails.videoId) {
        return setVideoId(backup[0].contentDetails.videoId)
      }
      else if (i < videosId.video.length - 1 && videoId === videosId.video[i].contentDetails.videoId) {
        return setVideoId(videosId.video[i + 1].contentDetails.videoId);
      }
    }

  };
  if (history.location.state === undefined) {
    console.log(historyState)
    setHistory({ video: backup })
    return history.push("/loadYt", { video: backup });
  } else if (history.location.state.video !== undefined) {
    console.log(history.location.state.video.length)

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
  if (backup.length > 0 && history.location.state.video > 6) {
    console.log(history.location.state.video)
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
      </button></div>
      </div>

    );
  };
}

export default Watch;
