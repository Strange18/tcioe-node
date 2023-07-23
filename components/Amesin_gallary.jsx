"use client";
import React from "react";
import { BodyText } from "./AboutThapathaliComponent";
import styled from "styled-components";
import CampusImageIndividual from "./CampusImageIndividual";

import amesin1 from "/assets/campuslife/AMESIN/amesin1.jpeg";
import amesin2 from "/assets/campuslife/AMESIN/amesin2.jpeg";
import amesin3 from "/assets/campuslife/AMESIN/amesin3.jpeg";
import amesin4 from "/assets/campuslife/AMESIN/amesin4.jpeg";
import amesin5 from "/assets/campuslife/AMESIN/amesin5.jpeg";
import amesin6 from "/assets/campuslife/AMESIN/amesin6.jpeg";
import amesin7 from "/assets/campuslife/AMESIN/amesin7.jpeg";
import amesin8 from "/assets/campuslife/AMESIN/amesin8.jpeg";
import amesin9 from "/assets/campuslife/AMESIN/amesin9.jpeg";
import amesin11 from "/assets/campuslife/AMESIN/amesin11.jpeg";
import amesin12 from "/assets/campuslife/AMESIN/amesin12.jpeg";
import amesin13 from "/assets/campuslife/AMESIN/amesin13.jpeg";
import amesin14 from "/assets/campuslife/AMESIN/amesin14.jpeg";
import amesin15 from "/assets/campuslife/AMESIN/amesin15.jpeg";
import amesin from "/assets/campuslife/AMESIN/amesin.jpeg";








const HeadingText = styled("h1")`
  font-size: 26px;
  color: #090c4c;
  text-align: center;
`;

const SubHeading = styled(HeadingText)`
  font-weight: 400;
  margin-top: 144px;
`;

const Heading = styled(HeadingText)`
  font-weight: 700;
`;

const SubText = styled(BodyText)`
  text-align: center;
  width: 60%;
  margin: 26px auto;
`;

const Container = styled("div")`
  width: 90vw;
  margin: 26px auto;
`;

const GridWrapper = styled("div")`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 200px;

  & > div:nth-child(3) {
    grid-row: span 2 / auto;
  }

  & > div:nth-child(5) {
    grid-column: span 2 / auto;
  }

  & > div:nth-child(6) {
    grid-row: span 2 / auto;
  }
`;

const Amesin_gallary = ({ title, description }) => {
  const images_api = [
    {
      id: 2,
      image_src: amesin6,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
   {
      id: 3,
      image_src: amesin3,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }, 
    {
      id: 4,
      image_src: amesin4,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      image_src: amesin2,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      image_src: amesin5,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 7,
      image_src: amesin7,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 9,
        image_src: amesin9,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 10,
        image_src:amesin,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 11,
        image_src: amesin11,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      
      {
        id: 12,
        image_src: amesin12,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      
      {
        id: 13,
        image_src: amesin13,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 14,
        image_src: amesin14,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
        {
        id: 15,
        image_src: amesin15,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      
     
      
  ];
  return (
    <>
      <SubHeading>{title}</SubHeading>
      <Heading>Experience</Heading>
      <SubText>{description}</SubText>
      <Container>
        <GridWrapper>
          {images_api.map((image) => (
            <CampusImageIndividual key={image.id} content={image} />
          ))}
        </GridWrapper>
      </Container>
    </>
  );
};

export default Amesin_gallary;