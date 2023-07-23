"use client";
import React from "react";
import { BodyText } from "./AboutThapathaliComponent";
import styled from "styled-components";
import CampusImageIndividual from "./CampusImageIndividual";

import cess1 from "/assets/campuslife/CESS/cess1.jpeg";
import cess2 from "/assets/campuslife/CESS/cess2.jpg";
import cess3 from "/assets/campuslife/CESS/cess3.jpeg";
import cess4 from "/assets/campuslife/CESS/cess4.jpeg";
import cess5 from "/assets/campuslife/CESS/cess5.jpeg";
import cess6 from "/assets/campuslife/CESS/cess6.jpeg";
import cess7 from "/assets/campuslife/CESS/cess7.jpeg";
import cess8 from "/assets/campuslife/CESS/cess8.jpeg";
import cess9 from "/assets/campuslife/CESS/cess9.jpeg";
import cess10 from "/assets/campuslife/CESS/cess10.jpeg";
import cess11 from "/assets/campuslife/CESS/cess11.jpeg";
import cess12 from "/assets/campuslife/CESS/cess12.jpeg";
import cess13 from "/assets/campuslife/CESS/cess13.jpeg";
import cess14 from "/assets/campuslife/CESS/cess14.jpeg";
import cess15 from "/assets/campuslife/CESS/cess15.jpeg";
import cess16 from "/assets/campuslife/CESS/cess16.jpeg";
import cess17 from "/assets/campuslife/CESS/cess17.jpeg";
import cess18 from "/assets/campuslife/CESS/cess18.jpeg";
import cess19 from "/assets/campuslife/CESS/cess19.jpeg";
import cess20 from "/assets/campuslife/CESS/cess20.jpeg";
import cess21 from "/assets/campuslife/CESS/cess21.jpeg";
import cess22 from "/assets/campuslife/CESS/cess22.jpeg";
import cess23 from "/assets/campuslife/CESS/cess23.jpeg";
import cess24 from "/assets/campuslife/CESS/cess24.jpeg";
import cess25 from "/assets/campuslife/CESS/cess25.jpeg";

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

const Cess_Gallary = ({ title, description }) => {
  const images_api = [
    {
      id: 1,
      image_src: cess1,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      image_src: cess2,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      image_src: cess3,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
      id: 4,
      image_src: cess4,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      image_src: cess5,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      image_src: cess6,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 7,
      image_src: cess7,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 8,
      image_src: cess8,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
      id: 9,
      image_src: cess9,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    // {
    //   id: 10,
    //   image_src: cess10,
    //   image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    // },
    {
      id: 11,
      image_src: cess11,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // {
    //   id: 12,
    //   image_src: cess12,
    //   image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    // },
    {
      id: 13,
      image_src: cess14,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 14,
      image_src: cess15,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 15,
      image_src: cess16,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
      id: 16,
      image_src: cess17,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // {
    //   id: 17,
    //   image_src: cess18,
    //   image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    // },
    {
      id: 18,
      image_src: cess19,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 19,
      image_src: cess20,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 20,
      image_src: cess21,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 21,
      image_src: cess22,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 22,
      image_src: cess23,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 23,
      image_src: cess24,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 24,
      image_src: cess25,
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

export default Cess_Gallary;
