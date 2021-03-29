//removed additional dependency for api calling
// import YouTube from 'react-youtube';

import { useHistory } from "react-router-dom";
import { backup } from "./backup";

const Watch = () => {
  let history = useHistory();
  //TODO
  // const onPlayVideo = () => {
  //     player.playVideo();
  // };

  // const onPauseVideo = () => {
  //     player.pauseVideo();
  // };

  // const onChangeVideo = () => {
  //     setVideoId(videoId === videoIdA ? videoIdB : videoIdA);
  // };
  //if some reason there is no state
  if (!history.location.state) {
    //load to api and send to show
    return history.push("/loadYt", { video: backup });
  }
  //just incase there is a reload or if wifi or network is offline
  if (history.location.state.video === undefined) {
    return history.push("/loadYt", { video: backup });
  } else {
    return history.location.state.video.map((item, index) => {
      let vid = "https://www.youtube.com/embed/" + item.contentDetails.videoId;
      return (
        <div key={index}>
          <div>{item.snippet.title}</div>
          <div className="video">
            <iframe
              id="ytplayer"
              type="text/html"
              width="720"
              height="405"
              src={vid}
              frameborder="0"
              allowfullscreen
            />
          </div>
        </div>
      );
    });
  }
};

export default Watch;
