"use client";
import React from "react";
import styled from "styled-components";
import OurDepartmentIndividualCard from "./OurDepartmentIndividualCard";
import bg from "@/assets/OurDepartmentsGridBackground.png";

export const H1 = styled("h1")`
  font-size: 26px;
  color: #090c4c;
  text-align: center;
  margin-top: 144px;
`;

export const ContainerCentered = styled("section")`
  width: 90vw;
  margin: 26px auto 0 auto;
  border-radius: 16px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const OurDepartmentsSection = () => {
  const contents_API = [
    {
      id: 1,
      title: "Architecture",
      link: "/doa",
      subtitle:
        "The Architecture Department serves as a hub for architectural education, research, and innovation, providing a platform for students and professionals to explore, analyze, and contribute to the built environment.",
    },
    {
      id: 2,
      title: "Civil",
      link: "/doce",
      subtitle:
        "The Civil Department serves as a center for civil engineering education, research, and innovation, preparing students to tackle complex engineering problems and contribute to the development and improvement of infrastructure systems in society.",
    },
    {
      id: 3,
      title: "Industrial",
      link: "/doie",
      subtitle:
        "The Industrial Department serves as a center for industrial engineering education, research, and innovation, preparing students to tackle complex engineering problems and contribute to the development and improvement of processes, systems, and operations in industries.",
    },
    {
      id: 4,
      title: "Electronics & Computer",
      link: "/doece",
      subtitle:
        "The department plays a vital role in driving technological advancements and shaping the future of electronics and computer engineering.",
    },
    {
      id: 5,
      title: "Automobile & Mechanical",
      link: "/doame",
      subtitle:
        "The department plays a crucial role in driving advancements in the automotive industry and ensuring the sustainability and efficiency of mechanical systems in various sectors.",
    },
    {
      id: 6,
      title: "Applied Science",
      link: "/doas",
      subtitle:
        "The Applied Science Department serves as a center for applied science education, research, and innovation. It prepares students to apply scientific knowledge and methodologies to address real-world challenges and contribute to the development and improvement of various industries and sectors.",
    },
  ];

  return (
    <>
      <H1>Our departments</H1>
      <ContainerCentered
        style={{ backgroundImage: `url(${bg.src})`, objectFit: "cover" }}
      >
        {contents_API.map((content) => (
          <OurDepartmentIndividualCard content={content} key={content.id} />
        ))}
      </ContainerCentered>
    </>
  );
};

export default OurDepartmentsSection;
