"use client";
import React from "react";
import { BodyText } from "./AboutThapathaliComponent";
import styled from "styled-components";
import RenderGallaryImages from "./RenderGallaryImages";

import amesin from "/assets/campuslife/AMESIN/amesin.jpeg";
import amesin2 from "/assets/campuslife/AMESIN/amesin2.jpeg";
import amesin4 from "/assets/campuslife/AMESIN/amesin4.jpeg";
import amesin5 from "/assets/campuslife/AMESIN/amesin5.jpeg";
import amesin6 from "/assets/campuslife/AMESIN/amesin6.jpeg";
import amesin9 from "/assets/campuslife/AMESIN/amesin9.jpeg";
import amesin11 from "/assets/campuslife/AMESIN/amesin11.jpeg";
import amesin14 from "/assets/campuslife/AMESIN/amesin14.jpeg";
import amesin15 from "/assets/campuslife/AMESIN/amesin15.jpeg";

const HeadingText = styled("h1")`
  font-size: 26px;
  color: #090c4c;
  text-align: center;
`;

const SubHeading = styled(HeadingText)`
  font-weight: 400;
  margin-top: 50px;
`;

const Heading = styled(HeadingText)`
  font-weight: 700;
`;

const SubText = styled(BodyText)`
  text-align: center;
  width: 60%;
  margin: 26px auto;
`;


const Amesin_gallary = ({ title, description }) => {
  const images_api = [
    {
      id: 1,
      image_src: amesin6,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      image_src: amesin4,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      image_src: amesin14,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      image_src: amesin2,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      image_src: amesin5,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      image_src: amesin11,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 7,
      image_src: amesin9,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 8,
      image_src: amesin,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 9,
      image_src: amesin15,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <>
      <SubHeading>{title}</SubHeading>
      <Heading>Experience</Heading>
      <SubText>{description}</SubText>
      <RenderGallaryImages images={images_api} />
    </>
  );
};

export default Amesin_gallary;