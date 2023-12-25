"use client";
import React from "react";
import { BodyText } from "./AboutThapathaliComponent";
import styled from "styled-components";
import RenderGallaryImages from "./RenderGallaryImages";

import asis from "/assets/campuslife/ASIS/asis.jpg";
import asis1 from "/assets/campuslife/ASIS/asis1.jpg";
import asis2 from "/assets/campuslife/ASIS/asis2.jpg";
import asis4 from "/assets/campuslife/ASIS/asis4.jpg";
import asis5 from "/assets/campuslife/ASIS/asis5.jpg";
import asis6 from "/assets/campuslife/ASIS/asis6.jpg";
import asis7 from "/assets/campuslife/ASIS/asis7.jpg";
import asis8 from "/assets/campuslife/ASIS/asis8.jpg";
import asis13 from "/assets/campuslife/ASIS/asis13.jpg";
import asis10 from "/assets/campuslife/ASIS/asis10.jpg";
import asis14 from "/assets/campuslife/ASIS/asis14.jpg";
import asis15 from "/assets/campuslife/ASIS/asis15.jpg";

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

const Asis_Gallary = ({ title, description }) => {
  const images_api = [
    {
      id: 1,
      image_src: asis,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      image_src: asis1,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      image_src: asis2,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      image_src: asis4,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      image_src: asis5,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      image_src: asis15,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 7,
      image_src: asis7,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 8,
      image_src: asis8,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 9,
      image_src: asis6,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
      id: 10,
      image_src: asis10,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
      id: 11,
      image_src: asis14,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 12,
      image_src: asis13,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }
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

export default Asis_Gallary;