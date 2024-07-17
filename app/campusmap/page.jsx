// pages/CampusMap.js
"use client";

import tw from "tailwind-styled-components";
import { useState } from "react";
// Import tailwind
import "../globals.css";
import map_2d from "./../../assets/map/2D_View.png";
import map_3d from "./../../assets/map/3D_View.png";
import React from "react";

import Image from "next/image";

const ImgDiv = tw.div`
  p-8
`;

const CampusMap = () => {
  const [is3D, setIs3D] = useState(false);

  const toggleMap = () => {
    setIs3D(!is3D);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-2 pb-8">
      <h1 className="text-4xl m-6">Campus Map</h1>

      <button
        className="mb-6 px-6 py-2 bg-blue-500 text-white rounded"
        onClick={toggleMap}
      >
        Switch to {is3D ? "2D" : "3D"} Map
      </button>
      <ImgDiv>
        {is3D ? (
          <Image src={map_3d} alt="Campus Map" className="rounded-2xl" />
        ) : (
          <Image src={map_2d} alt="Campus Map" className="rounded-2xl" />
        )}
      </ImgDiv>
    </div>
  );
};

export default CampusMap;
