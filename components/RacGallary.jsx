"use client";
import React from "react";
import { BodyText } from "./AboutThapathaliComponent";
import styled from "styled-components";
import CampusImageIndividual from "./CampusImageIndividual";
import rac1 from "/assets/rac1.jpeg";
import rac2 from "/assets/rac2.jpeg";

 import rac4 from "/assets/rac4.jpeg"; 
import rac5 from "/assets/rac5.jpeg";
import rac6 from "/assets/rac6.jpeg";
import rac7 from "/assets/rac7.jpeg";
import rac8 from "/assets/rac8.jpeg";
import rac9 from "/assets/rac9.jpeg";
import rac10 from "/assets/rac10.jpeg";
import rac11 from "/assets/rac11.jpeg";
import rac from "/assets/rac.jpeg";
import rac12 from "/assets/rac12.jpeg";
import rac14 from "/assets/rac14.jpeg";
import rac15 from "/assets/rac15.jpeg";
import rac16 from "/assets/rac16.jpeg";
import rac17 from "/assets/rac17.jpeg";
import rac18 from "/assets/rac18.jpg";
import rac19 from "/assets/rac19.jpeg";
import rac20 from "/assets/rac20.jpeg";







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

const RacGallary = ({ title, description }) => {
  const images_api = [
    {
      id: 1,
      image_src: rac1,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      image_src: rac2,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
   {
      id: 4,
      image_src: rac4,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }, 
    {
      id: 5,
      image_src: rac5,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      image_src: rac6,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 7,
      image_src: rac7,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 8,
      image_src: rac8,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 9,
      image_src: rac9,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 10,
        image_src: rac10,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 11,
        image_src: rac11,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      
      {
        id: 12,
        image_src: rac,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      
      {
        id: 14,
        image_src: rac14,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 15,
        image_src: rac15,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 16,
        image_src: rac16,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 17,
        image_src: rac17,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 18,
        image_src: rac18,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 19,
        image_src: rac19,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 20,
        image_src: rac20,
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

export default RacGallary;