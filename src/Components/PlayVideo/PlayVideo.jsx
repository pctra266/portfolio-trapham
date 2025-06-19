import React from "react";
import video from "../../assets/bs2.mp4";

const PlayVideo = () => {
  return (
    <div className="video-player">
      <video src={video} controls autoPlay></video>
    </div>
  );
};

export default PlayVideo;
