import React from "react";
import mapone from "./assets/map_1.png";
import mapsecond from "./assets/map_2.png";
import { motion } from "framer-motion";
import { animationStart } from "./utils/animation";

const MapDesign = () => {
  return (
    <motion.div className="absolute w-full flex justify-between transform-translate-y-200px z-negative-one overflow-hidden">
      <motion.img
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: animationStart + 1.2,
          type: "tween",
          duration: 0.5,
        }}
        src={mapone}
        alt=""
        className="mapone"
      />
      <motion.img
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: animationStart + 1.2,
          type: "tween",
          duration: 0.5,
        }}
        src={mapsecond}
        alt=""
        className="mapsecond"
      />
    </motion.div>
  );
};

export default MapDesign;
