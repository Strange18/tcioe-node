"use client";
import React from "react";
import { BodyText } from "./AboutThapathaliComponent";
import styled from "styled-components";
import CampusImageIndividual from "./CampusImageIndividual";

import tensor from "/assets/campuslife/Tensor/tensor.jpeg";
import tensor1 from "/assets/campuslife/Tensor/tensor1.jpeg";
import tensor2 from "/assets/campuslife/Tensor/tensor2.jpeg";
import tensor4 from "/assets/campuslife/Tensor/tensor4.jpeg";
import tensor6 from "/assets/campuslife/Tensor/tensor6.jpeg";
import tensor7 from "/assets/campuslife/Tensor/tensor7.jpeg";
import tensor8 from "/assets/campuslife/Tensor/tensor8.jpeg";
import tensor9 from "/assets/campuslife/Tensor/tensor9.jpeg";
import tensor10 from "/assets/campuslife/Tensor/tensor10.jpeg";
import tensor11 from "/assets/campuslife/Tensor/tensor11.jpeg";
import tensor12 from "/assets/campuslife/Tensor/tensor12.jpeg";
import tensor13 from "/assets/campuslife/Tensor/tensor13.jpeg";
import tensor14 from "/assets/campuslife/Tensor/tensor14.jpeg";
import tensor15 from "/assets/campuslife/Tensor/tensor15.jpeg";





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

const Tensor_gallary = ({ title, description }) => {
  const images_api = [
    {
      id: 1,
      image_src: tensor,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      image_src: tensor1,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
   {
      id: 4,
      image_src: tensor2,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }, 
    
    {
      id: 6,
      image_src: tensor4,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 8,
      image_src: tensor6,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 9,
      image_src: tensor7,
      image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 10,
        image_src: tensor8,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 11,
        image_src: tensor9,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      
      {
        id: 12,
        image_src:tensor10,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      
      {
        id: 14,
        image_src: tensor11,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 15,
        image_src: tensor12,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 16,
        image_src: tensor13,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 17,
        image_src: tensor14,
        image_context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 18,
        image_src: tensor15,
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