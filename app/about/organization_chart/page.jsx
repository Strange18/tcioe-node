"use client";
import React from "react";
import Image from "next/image";
import orgChart from "@/assets/about/organization_chart/org.svg";
import styled from "styled-components";

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  max-height: 80vh;
  padding: 20px;
  border: 2px solid #f0f0f0;
  border-radius: 8px;
  object-fit: contain;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    padding: 30px;
    max-height: 70vh;
  }

`;

const Page = () => {
  return (
    <div>
      <StyledImage src={orgChart} alt="organization chart" />
    </div>
  );
};

export default Page;
