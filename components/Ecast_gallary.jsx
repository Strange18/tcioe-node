"use client";
import React from "react";
import { BodyText } from "./AboutThapathaliComponent";
import styled from "styled-components";
import CampusImageIndividual from "./CampusImageIndividual";

import ecast from "/assets/campuslife/ECAST/ecastLogo.png";
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

const Ecast_gallary = ({ title, description }) => {
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
      id: 4,
      image_src: ecast2,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }, 
    {
      id: 5,
      image_src: ecast3,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      image_src: ecast4,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 7,
      image_src: ecast9,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 8,
      image_src: ecast6,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 9,
      image_src: ecast7,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 10,
        image_src: ecast8,
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

export default Ecast_gallary;