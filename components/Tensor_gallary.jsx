"use client";
import React from "react";
import { BodyText } from "./AboutThapathaliComponent";
import styled from "styled-components";
import CampusImageIndividual from "./CampusImageIndividual";

import tensor from "/assets/campuslife/Tensor/tensor.jpeg";
import tensor2 from "/assets/campuslife/Tensor/tensor2.jpg";
import tensor3 from "/assets/campuslife/Tensor/tensor3.jpeg";
import tensor4 from "/assets/campuslife/Tensor/tensor4.jpg";
import tensor5 from "/assets/campuslife/Tensor/tensor5.jpeg";
import tensor6 from "/assets/campuslife/Tensor/tensor6.jpeg";
import tensor7 from "/assets/campuslife/Tensor/tensor7.jpg";
import tensor8 from "/assets/campuslife/Tensor/tensor8.jpg";
import tensor9 from "/assets/campuslife/Tensor/tensor9.jpg";
import tensor10 from "/assets/campuslife/Tensor/tensor10.jpg";



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
  padding-bottom: 32px;
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

const Tensor_gallary = ({ title, description }) => {
  const images_api = [
    {
      id: 1,
      image_src: tensor10,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      image_src: tensor2,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
   {
      id: 3,
      image_src: tensor3,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }, 
    
    {
      id: 4,
      image_src: tensor4,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      image_src: tensor5,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      image_src: tensor6,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 7,
      image_src: tensor7,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 8,
      image_src: tensor8,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 9,
      image_src: tensor9,
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

export default Tensor_gallary;