"use client"

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const StyledParagraph = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background-color: #090C4C;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: inline-block;
  position: relative;
  min-width: 30%;
  text-align: center;
  margin: 0 auto;
  > a:hover{
    color: #FFCC00;
  }
`;

// const VerticalLine = styled.div`
//   position: absolute;
//   height: 100%;
//   width: 10px; /* Increased line width */
//   top: 0;
//   left: -15px; /* Adjusted position */
//   background-color: #FFCC00;
//   border-radius: 8px 8px 8px 8px;
// `;

const DisclamerParagraph = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #090C4C;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: inline-block;
  position: relative;
  min-width: 30%;
  text-align: center;
  margin: 0 auto;
`;

export default function AdmissionsLayout({ children }) {
  return (
    <>
      {children}
      <Container>
        <StyledParagraph>
          {/* <VerticalLine></VerticalLine> */}
          <a href="/notices/dc5e5f7a-1829-45c6-a76f-d0538d4e2592" target="_blank">BE/BArch Entrance/Admission Booklet 2080</a>
        </StyledParagraph>
        <DisclamerParagraph>
          Disclamer: The information in this page is an unofficial translation of the IOE Entrance/Admission Booklet 2080. The official document is available at the link above.
        </DisclamerParagraph>
      </Container>
    </>
  );
}
