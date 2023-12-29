"use client";
import React from "react";
import HeroComponent from "@/components/HeroComponent";
import ProgramsOfferedComponent from "@/components/ProgramsOfferedComponent";

//paxi backend bata head_data fetch garera pathaune
import ProgramsIntroComponent from "@/components/ProgramsIntroComponent";

import computer from "@/assets/computer.jpg";
import electronics from "@/assets/electronics.jpg";
import automobile from "@/assets/auto_pic.jpeg";
import mechanical from "@/assets/mech_pic.jpeg";
import civil from "@/assets/civil_pic.jpeg";
import industrial from "@/assets/industrial_pic.jpeg";
import architecture from "@/assets/arch-hero.jpg";
import hero from "@/assets/bachelorprogram.jpg";

const programs_data = [
  {
    id: 1,
    name: "Bachelor of Civil Engineering",
    description:
      "Our program provides students with a profound understanding of civil engineering principles. Taught by experienced faculty, the program is unique in its comprehensive approach to structural, geotechnical, and environmental engineering. The program follows the curriculum of the Institute of Engineering. Upon successful completion, students receive certificates from TU.",
    image: civil,
  },
  {
    id: 2,
    name: "Bachelor of Computer Engineering",
    description:
      "In our program, students learn from experienced faculty and get updated on the latest developments in Information Technology and Computer Engineering through special lectures. This program stands out for its emphasis on blending theoretical knowledge with real-world applications. Academic quality is maintained by the university, and successful students receive their certificates from TU.",
    image: computer,
  },
  {
    id: 3,
    name: "Bachelor of Electronics and Communication Engineering",
    description:
      "Our four-year program offers students the chance to learn from qualified faculty, with an emphasis on the latest developments in Information Communication Technology and Electronics. This program is unique in its integrated approach to Electronics and Communication, preparing students for diverse career paths. Academic matters are overseen by the university, and TU awards certificates upon successful program completion.",
    image: electronics,
  },
  {
    id: 4,
    name: "Bachelor of Mechanical Engineering",
    description:
      "Our program provides students with a deep understanding of mechanical engineering principles, guided by experienced faculty. Uniquely, this program incorporates advanced simulations and cutting-edge manufacturing techniques into its curriculum. We follow the curriculum of the Institute of Engineering, and certificates are awarded by TU upon successful completion.",
    image: mechanical,
  },
  {
    id: 5,
    name: "Bachelor of Automobile Engineering",
    description:
      "Our program prepares students for a promising career in automobile engineering under the guidance of experienced faculty. Distinguished by its focus on the latest trends in automobile technology and sustainable design, the curriculum is maintained by the Institute of Engineering, and successful students are awarded certificates by TU.",
    image: automobile,
  },
  {
    id: 6,
    name: "Bachelor of Industrial Engineering",
    description:
      "Students in our program become future leaders in industrial engineering, taught by experienced faculty. The program's distinctiveness lies in its strong emphasis on both technical skills and management principles. The program adheres to the Institute of Engineering's curriculum. TU awards certificates to successful students.",
    image: industrial,
  },
  {
    id: 7,
    name: "Bachelor of Architecture",
    description:
      "Our five-year program offers in-depth theoretical and practical learning in Architecture and Urban Planning. What sets this program apart is its focus on sustainable and future-forward design principles. Taught by experienced faculty, the program adheres to the Institute of Engineering's curriculum. Successful students receive certificates from TU.",
    image: architecture,
  },
];
const Page = () => {
  return (
    <>
      <div>
        <HeroComponent img={hero} />
        <ProgramsIntroComponent
          title="Bachelor's Degree Majors and Programs"
          description="
          Our bachelor's programs are designed to provide students with a 
          deep understanding of engineering principles, while also promoting 
          creativity, critical thinking, and problem-solving skills. 
          Each program combines rigorous academic study with hands-on experience, 
          preparing graduates to excel in their chosen fields."
        />
        <ProgramsOfferedComponent programs={programs_data} />
      </div>
    </>
  );
};

export default Page;
