"use client";
import React from "react";
import { BodyText } from "./AboutThapathaliComponent";
import styled from "styled-components";
import RenderGallaryImages from "./RenderGallaryImages";

import puja1 from "/assets/campuslife/Saraswati_Puja/puja1.jpg";
import puja2 from "/assets/campuslife/Saraswati_Puja/puja2.jpg";
import puja3 from "/assets/campuslife/Saraswati_Puja/puja3.jpg";
import puja4 from "/assets/campuslife/Saraswati_Puja/puja4.jpg";
import puja5 from "/assets/campuslife/Saraswati_Puja/puja5.jpg";
import puja6 from "/assets/campuslife/Saraswati_Puja/puja6.jpg";
import puja7 from "/assets/campuslife/Saraswati_Puja/puja7.jpg";
import puja8 from "/assets/campuslife/Saraswati_Puja/puja8.jpg";
import puja9 from "/assets/campuslife/Saraswati_Puja/puja9.jpg";
import puja10 from "/assets/campuslife/Saraswati_Puja/puja10.jpg";
import puja11 from "/assets/campuslife/Saraswati_Puja/puja11.jpg";
import puja12 from "/assets/campuslife/Saraswati_Puja/puja12.jpg";
import puja13 from "/assets/campuslife/Saraswati_Puja/puja13.jpg";
import puja14 from "/assets/campuslife/Saraswati_Puja/puja14.jpg";
import puja15 from "/assets/campuslife/Saraswati_Puja/puja15.jpg";
import puja16 from "/assets/campuslife/Saraswati_Puja/puja16.jpg";

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

const Saraswati_Puja_Gallary = ({ title, description }) => {
  const images_api = [
    {
      id: 1,
      image_src: puja1,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      image_src: puja2,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
   {
      id: 3,
      image_src:puja3,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }, 
    
    {
      id: 4,
      image_src: puja4,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      image_src:puja5,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      image_src: puja6,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 7,
        image_src: puja7,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 8,
        image_src: puja8,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      
      {
        id: 9,
        image_src:puja9,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      
      {
        id: 10,
        image_src: puja10,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 11,
        image_src: puja11,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 12,
        image_src: puja12,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 13,
        image_src: puja13,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 14,
        image_src: puja14,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 15,
        image_src: puja15,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 16,
        image_src: puja16,
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

export default Saraswati_Puja_Gallary;