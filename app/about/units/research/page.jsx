"use client";

import AboutComponent from "../../../(research_facilities)/AboutComponent";
import Objectives from "@/components/About/Sections/Objective";
import rdunit_img from "/assets/units/rdunit.png";

import { RenderTeamCards } from "@/components/RenderTeamCards";
import { useState, useEffect } from "react";
const fetchData = async () => {
  const res = await fetch(
    "https://notices.tcioe.edu.np/api/department/staffs/search/?department=Research and Development Unit"
  );
  const data = await res.json();
  return data;
};

const data = {
  heading: "Research and Development Unit",
  body_text: `Thapathali Campus has a dedicated Research and Development Unit that is responsible for promoting research activities among faculty members and students. This unit provides support to researchers by offering research grants, facilitating collaborations, and providing access to various research facilities. Er. Sugam Maharjan led this unit and with his vast knowledge and experience in research, the unit encouraged and promoted research activities among faculty members and students. The unit has been successful in securing research grants and fostering collaborations with national and international research organizations. The efforts of this unit have been instrumental in enhancing the research culture at Thapathali Campus and creating opportunities for faculty and students to contribute to the development of science and technology in Nepal.`,
  img: rdunit_img,
};
const objectives = [
  "Establishing the campus as a 'Research and Development Center' by making good use of the budget received from various organizations and the internal resources of the campus.",
  "Coordinating the research activities of the teachers, staff, and students of the campus for the academic upgradation of the campus.",
  "Finding possibilities for the development of research findings and achievements and doing the necessary work.",
  "Coordinate and collaborate with various universities, study institutes, and campuses of the country and abroad to carry out research activities.",
  "Coordinate with government and non-government offices and industries to carry out investigative work on necessary issues.",
  "To establish a harmonious relationship between the campus and the industries by expanding the relationship with the industries.",
  "To do other assigned work related to R&D.",
];
export default function page() {
  const [Officials, setOfficials] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
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
