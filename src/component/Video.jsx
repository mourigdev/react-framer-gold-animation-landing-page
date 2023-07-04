import React from "react";
import video from "../assets/boat-video.mp4";

const Video = () => {
  return (
    <div>
      <video muted loop autoPlay>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
