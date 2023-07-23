"use client";
import React from "react";
import { BodyText } from "./AboutThapathaliComponent";
import styled from "styled-components";
import CampusImageIndividual from "./CampusImageIndividual";

import utsarga1 from "/assets/campuslife/Utsarga/utsarga1.jpg";
import utsarga2 from "/assets/campuslife/Utsarga/utsarga2.jpg";
import utsarga3 from "/assets/campuslife/Utsarga/utsarga3.jpg";
import utsarga4 from "/assets/campuslife/Utsarga/utsarga4.jpg";
import utsarga5 from "/assets/campuslife/Utsarga/utsarga5.jpg";
import utsarga6 from "/assets/campuslife/Utsarga/utsarga6.jpg";
import utsarga7 from "/assets/campuslife/Utsarga/utsarga7.jpg";
import utsarga8 from "/assets/campuslife/Utsarga/utsarga8.jpg";
import utsarga9 from "/assets/campuslife/Utsarga/utsarga9.jpg";
import utsarga10 from "/assets/campuslife/Utsarga/utsarga10.jpg";
import utsarga11 from "/assets/campuslife/Utsarga/utsarga11.jpg";
import utsarga12 from "/assets/campuslife/Utsarga/utsarga12.jpg";
import utsarga13 from "/assets/campuslife/Utsarga/utsarga13.jpg";
import utsarga14 from "/assets/campuslife/Utsarga/utsarga14.jpg";
import utsarga15 from "/assets/campuslife/Utsarga/utsarga15.jpg";
import utsarga16 from "/assets/campuslife/Utsarga/utsarga16.jpg";
import utsarga17 from "/assets/campuslife/Utsarga/utsarga17.jpg";





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

const Utsarga_Gallary = ({ title, description }) => {
  const images_api = [
    {
      id: 1,
      image_src: utsarga1,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      image_src: utsarga2,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
   {
      id: 3,
      image_src:utsarga3,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }, 
    
    {
      id: 4,
      image_src: utsarga4,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      image_src:utsarga5,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      image_src: utsarga6,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 7,
        image_src: utsarga7,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 8,
        image_src: utsarga8,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      
      {
        id: 9,
        image_src:utsarga9,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      
      {
        id: 10,
        image_src: utsarga10,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 11,
        image_src: utsarga11,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 12,
        image_src: utsarga12,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 13,
        image_src: utsarga13,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 14,
        image_src: utsarga14,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 15,
        image_src: utsarga15,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 16,
        image_src: utsarga16,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 17,
        image_src: utsarga17,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      }
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

export default Utsarga_Gallary;