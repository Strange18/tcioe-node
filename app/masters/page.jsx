"use client";
import React from "react";
import HeroComponent from "@/components/HeroComponent";
import ProgramsOfferedComponent from "@/components/ProgramsOfferedComponent";

//paxi backend bata head_data fetch garera pathaune

import ProgramsIntroComponent from "@/components/ProgramsIntroComponent";
import earthquakeEngineering from "@/assets/earthquakeEngineering.jpeg";
import hero from "@/assets/masterprogram.png";
import mechanicaldesign from "@/assets/mechdesign.jpeg";
import informatics from "@/assets/elec_pic.jpeg";
const programs_data = [
  {
    id: 1,
    name: "M.Sc. in Earthquake Engineering",
    description:
      "The Civil department offers an M.Sc. in Earthquake Engineering, introduced in 2071 BS. Graduates can pursue careers in construction, infrastructure development, and transportation. What makes this program unique is its specific focus on earthquake-resistant design and construction, preparing students to contribute to the resilience of infrastructures in earthquake-prone regions.",
    image: earthquakeEngineering,
  },
  {
    id: 2,
    name: "M.Sc. in Mechanical Design and Manufacturing",
    description:
      "The Mechanical and Automobile department offers an M.Sc. in Engineering in Mechanical Design and Manufacturing, introduced in 2073 BS. This program provides students with advanced knowledge and skills in mechanical engineering, particularly in design and manufacturing. The uniqueness of this program lies in its integration of cutting-edge design principles with hands-on manufacturing practices, equipping students to excel in modern industrial environments.",
    image: mechanicaldesign,
  },
  {
    id: 3,
    name: "M.Sc. in Informatics and Intelligent Systems Engineering",
    description:
      "The Electronics and Computer Department offers an M.Sc. program in informatics and intelligent systems engineering from 2077 BS. Graduates are well-prepared for careers in telecommunications, network security, hardware development, application development, and programming. The distinctive aspect of this program is its comprehensive approach to both informatics and intelligent systems, preparing students to lead in the rapidly evolving fields of AI and data science.",
    image: informatics,
  },
];
const Page = () => {
  return (
    <>
      <div>
        <HeroComponent img={hero} />
        <ProgramsIntroComponent
          title="Masters Degree Majors and Programs"
          description="
          Our master's programs, including the M.Sc. in 
          Earthquake Engineering, M.Sc. in Mechanical 
          Design and Manufacturing, and M.Sc. in Informatics 
          and Intelligent Systems Engineering, are designed to 
          foster innovation, analytical thinking, and practical 
          research skills. Each program harmoniously blends rigorous 
          academic study with hands-on research, propelling graduates 
          towards success in their chosen specializations."
        />
        <ProgramsOfferedComponent programs={programs_data} />
      </div>
    </>
  );
};

export default Page;
