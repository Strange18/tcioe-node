"use client";
import React from "react";
import { BodyText } from "./AboutThapathaliComponent";
import styled from "styled-components";
import RenderGallaryImages from "./RenderGallaryImages";

// import ecast from "/assets/campuslife/ECAST/ecastLogo.png";
import ecast1 from "/assets/campuslife/ECAST/ecast1.png";
import ecast2 from "/assets/campuslife/ECAST/ecast2.jpg";
import ecast3 from "/assets/campuslife/ECAST/ecast3.jpg";
import ecast4 from "/assets/campuslife/ECAST/ecast4.jpg";
import ecast6 from "/assets/campuslife/ECAST/ecast6.jpg";
import ecast7 from "/assets/campuslife/ECAST/ecast7.jpg";
import ecast8 from "/assets/campuslife/ECAST/ecast8.jpg";
import ecast9 from "/assets/campuslife/ECAST/ecast9.jpg";
import ecast10 from "/assets/campuslife/ECAST/ecast10.jpg";

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


const Ecast_Gallary = ({ title, description }) => {
  const images_api = [
    {
      id: 1,
      image_src: ecast1,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      image_src: ecast10,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      image_src: ecast2,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      image_src: ecast3,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      image_src: ecast4,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      image_src: ecast9,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 7,
      image_src: ecast6,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 8,
      image_src: ecast7,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 9,
      image_src: ecast8,
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

export default Ecast_Gallary;