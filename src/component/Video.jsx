import React from "react";
import video from "../assets/boat-video.mp4";
import { motion } from "framer-motion";

const Video = () => {
  return (
    <div>
      <video className="animation-clip-from-top-animation" muted loop autoPlay>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
