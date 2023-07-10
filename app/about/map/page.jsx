"use client";
import React from "react";
import Image from "next/image";
import campusMap from "@/assets/about/campusMap/campus_map.jpg";
import styled from "styled-components";

const StyledImage = styled(Image)`
  width: 100%;
  height: 80vh;
  border: none;
  object-fit: fill;
`;
const Page = () => {
  return (
    <div>
      <StyledImage src={campusMap} alt="Campus Map" />
    </div>
  );
};

export default Page;
