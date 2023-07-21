"use client";
import React from "react";
import { BodyText } from "./AboutThapathaliComponent";
import styled from "styled-components";
import CampusImageIndividual from "./CampusImageIndividual";
import soies1 from "/assets/campuslife/SOIES/soies1.jpeg";
import soies2 from "/assets/campuslife/SOIES/soies2.jpeg";
import soies3 from "/assets/campuslife/SOIES/soies3.jpeg";
import soies4 from "/assets/campuslife/SOIES/soies4.jpeg";
import soies5 from "/assets/campuslife/SOIES/soies5.jpeg";
import soies6 from "/assets/campuslife/SOIES/soies6.jpeg";
import soies7 from "/assets/campuslife/SOIES/soies7.jpeg";
import soies8 from "/assets/campuslife/SOIES/soies8.jpeg";
import soies9 from "/assets/campuslife/SOIES/soies9.jpeg";
import soies10 from "/assets/campuslife/SOIES/soies10.jpeg";
import soies11 from "/assets/campuslife/SOIES/soies11.jpeg";
import soies12 from "/assets/campuslife/SOIES/soies12.jpeg";
import soies13 from "/assets/campuslife/SOIES/soies13.jpeg";
import soies14 from "/assets/campuslife/SOIES/soies14.jpeg";
import soies15 from "/assets/campuslife/SOIES/soies15.jpeg";
import soies16 from "/assets/campuslife/SOIES/soies16.jpeg";
import soies17 from "/assets/campuslife/SOIES/soies17.jpeg";
import soies18 from "/assets/campuslife/SOIES/soies18.jpeg";
import soies19 from "/assets/campuslife/SOIES/soies19.jpeg";
import soies20 from "/assets/campuslife/SOIES/soies20.jpeg";
import soies21 from "/assets/campuslife/SOIES/soies21.jpeg";
import soies22 from "/assets/campuslife/SOIES/soies22.jpeg";
import soies23 from "/assets/campuslife/SOIES/soies23.jpeg";
import soies24 from "/assets/campuslife/SOIES/soies24.jpeg";
import soies25 from "/assets/campuslife/SOIES/soies26.jpeg";
import soies26 from "/assets/campuslife/SOIES/soies26.jpeg";
import soies27 from "/assets/campuslife/SOIES/soies27.jpeg";
import soies28 from "/assets/campuslife/SOIES/soies28.jpeg";
import soies29 from "/assets/campuslife/SOIES/soies29.jpeg";
import soies30 from "/assets/campuslife/SOIES/soies30.jpeg";
import soies31 from "/assets/campuslife/SOIES/soies31.jpeg";




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

const Soies_Gallary = ({ title, description }) => {
  const images_api = [
    {
      id: 1,
      image_src: soies1,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      image_src: soies2,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
   {
      id: 3,
      image_src: soies3,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }, 
    {
      id: 4,
      image_src: soies4,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      image_src: soies5,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      image_src: soies6,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 7,
      image_src: soies7,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 8,
      image_src: soies8,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 9,
        image_src: soies9,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 10,
        image_src: soies10,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      
      {
        id: 11,
        image_src: soies11,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      
      {
        id: 12,
        image_src: soies12,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 13,
        image_src: soies13,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 14,
        image_src: soies14,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 15,
        image_src: soies15,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 15,
        image_src: soies16,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 16,
        image_src: soies17,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 17,
        image_src: soies18,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 18,
        image_src: soies19,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      
    
      {
        id: 20,
        image_src: soies20,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 21,
        image_src: soies22,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 22,
        image_src: soies23,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 23,
        image_src: soies23,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 24,
        image_src: soies24,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 25,
        image_src: soies25,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 26,
        image_src: soies26,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 27,
        image_src: soies27,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 28,
        image_src: soies28,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 29,
        image_src: soies29,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 30,
        image_src: soies30,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 31,
        image_src: soies31,
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

export default Soies_Gallary;