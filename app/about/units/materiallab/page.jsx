"use client";

import AboutComponent from "../../../(research_facilities)/AboutComponent";
import Objectives from "@/components/About/Sections/Objective";
import material_lab_img from "../../../../assets/research_facilities/material_lab.png";

import { RenderTeamCards } from "@/components/RenderTeamCards";
import { useState, useEffect } from "react";
const fetchData = async () => {
  const res = await fetch(
    "https://notices.tcioe.edu.np/api/department/staffs/search/?department=Material Testing Laboratory Unit"
  );
  const data = await res.json();
  return data;
};
const fetchImage = async () => {
  const res = await fetch(
    "https://notices.tcioe.edu.np/api/image-search/?image_id=22"
  );
  const data = await res.json();
  return data[0].image;
};

const objectives = [
  "To verify the quality of construction materials and items used for building infrastructure and development in various organizations.",
  "To ensure the quality of construction materials and items used in the infrastructure and development of the campus.",
  "To provide opportunities for students to test to enhance their practical and practical knowledge about construction materials and objects.",
  "To increase the income towards the internal resources of the campus and spend it on the educational upgradation of the campus by verifying the quality of various organizations and the goods.",
  "Doing other assigned work related to product testing.",
];
export default function EnergyLab() {
  const [img, setImg] = useState([]);
  const data = {
    heading: "Material Testing Laboratory",
    body_text: `
      Thapathali Campus' Material Testing Laboratory (MTL) is a critical resource for Nepal's construction industry, established in 2076 B.S. to offer advanced testing facilities for both public and private construction projects. Initially used solely for student practical work, the MTL has expanded to include five major sections: Concrete Lab, Universal Testing Machine (UTM) Lab, Building Materials Lab, Soil Lab, and Transportation Lab. This comprehensive laboratory provides a wide range of testing services, including tensile, compression, shear, flexure, torsion, and non-destructive testing, as well as calibration services. Equipped with state-of-the-art machines and equipment like the Universal Testing Machine (1000 kN), Compression Testing Machine (2000 kN), Ultrasonic Pulse Velocity, Rebound Hammer, and Oven, the MTL ensures accurate and reliable tests on construction materials. The dedicated staff regularly attends training programs to stay updated on the latest testing methods and techniques, guaranteeing high-quality service. Prompt delivery of accurate results is a priority to prevent construction delays, and the MTL strives to provide efficient and dependable outcomes.`,
    img: img,
  };
  const [Officials, setOfficials] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      const imageData = await fetchImage();
      setImg(imageData);
      setOfficials(data);
    };
    getData();
  }, []);
  return (
    <>
      <AboutComponent
        heading={data.heading}
        body_text={data.body_text}
        img={data.img}
      />
      <Objectives objectives={objectives} section="Main Objectives" />
      <RenderTeamCards title="Officials" Members={Officials} />
    </>
  );
}
