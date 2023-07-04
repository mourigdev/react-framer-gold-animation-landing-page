import React from "react";
import mapone from "./assets/map_1.png";
import mapsecond from "./assets/map_2.png";

const MapDesign = () => {
  return (
    <div className="absolute w-full flex justify-between transform-translate-y-200px z-negative-one overflow-hidden">
      <img src={mapone} alt="" className="mapone" />
      <img src={mapsecond} alt="" className="mapsecond" />
    </div>
  );
};

export default MapDesign;
