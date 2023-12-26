"use client";
import React from 'react';
import styled from "styled-components";
import CampusImageIndividual from './CampusImageIndividual';

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
  @media (min-width: 1165px) {
    & > div:nth-child(3) {
      grid-row: span 2 / auto;
    }
  
    & > div:nth-child(5) {
      grid-column: span 2 / auto;
    }
  
    & > div:nth-child(6) {
      grid-row: span 2 / auto;
    }
    & > div:nth-child(10) {
        grid-column: span 2 / auto;
    }
  }
  @media (max-width: 1165px) {
    // hide more than 12 images in mobile view
    & > div:nth-child(n+18):not(:nth-last-child(n+19)) ~ div {
        display: none;
  }
`;

const RenderGallaryImages = ({ images }) => {

    return (
        <>
            <Container>
                <GridWrapper>
                    {images.map((image) => (
                        <CampusImageIndividual key={image.id} content={image} />
                    ))}
                </GridWrapper>
            </Container>
        </>
    )
}

export default RenderGallaryImages