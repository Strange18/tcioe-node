"use client";

import React from 'react';
import AboutComponent from '../AboutComponent';
import automobile_lab_img from '../../../assets/research_facilities/automobile_lab.jpg';
import styled from "styled-components";

const SubHeading = styled.h2`

font-size: 22px;
font-weight: 700;
color: #090c4c;
text-align: left;
margin-top: 2rem;
margin-bottom: 1rem;

@media (max-width: 1200px) {
  flex: 100%;
}

`;

const listStyles = {
  listStyleType: 'disc',
};


const data = {
  heading: 'Automobile Lab',
  body_text: 'Serving as the first technical college in the country, Thapathali campus is known for its research facilities, especially in Automobile and Mechanical engineering. As the only college in the country to offer a bachelor\'s in Automobile engineering, the college executive committee has decided to start an Automobile research laboratory inside the college. With the rapidly growing demand for Automobiles in the country, the next vehicle to be manufactured in Nepal could be prototyped here.',
  img: automobile_lab_img,
};

export default function EnergyLab() {
  return (
    <>
      <AboutComponent heading={data.heading} body_text={getBodyTextWithObjectives()} img={data.img} />
    </>
  );
}

function getBodyTextWithObjectives() {
  return (
    <>
      <p>
        {data.body_text}
      </p>
      <SubHeading>Objectives</SubHeading>
      <ul style={listStyles}>
        <li>Provide best infrastructures for automobile research,</li>
        <li>To prepare best human resources in the automobile field,</li>
        <li>To create suitable platform for the study of aspects related to Automobile Engineering.</li>
      </ul>
    </>
  );
}
