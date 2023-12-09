"use client";

import Objectives from "@/components/About/Sections/Objective";
import AboutComponent from "../../../(research_facilities)/AboutComponent";

import administrative_img from "/assets/units/administrative.png";
import { RenderTeamCards } from "@/components/RenderTeamCards";
import { useState, useEffect } from "react";
const fetchData = async () => {
  const res = await fetch(
    "https://notices.tcioe.edu.np/api/department/staffs/search/?department=Planning Section"
  );
  const data = await res.json();
  return data;
};
const data = {
  heading: "Planning Section",
  body_text: `The administration section at Thapathali Campus oversees various departments and activities, including general administration, finance, academics, examinations, facilities management, and stores. Its main goal is to ensure efficient operations by monitoring staff and student activities, enforcing policies, and managing resources effectively. Additionally, it coordinates events, programs, and partnerships to support campus objectives. The section is divided into Personnel Administration, responsible for staff and faculty records and recruitment, and General Administration, which maintains campus facilities and resources while ensuring compliance with regulations. Effective record-keeping ensures systematic operations aligned with Tribhuvan University's standards.
  `,
  img: administrative_img,
};
const objectives = [
  "Formulate a plan related to the academic and administrative issues of the campus, create an integrated plan and submit it to the head, and regularly hold meetings, conferences, seminars, etc.",
  "Interact regularly with professors, teachers, staff, and students working in the campus for the benefit of the campus.",
  "Prepare/make an annual procurement plan in coordination with concerned agencies.",
  "Coordinate with the concerned bodies to carry out activities related to the improvement of academic and administrative quality determined by the internal quality assurance committee of the campus.",
  "Coordinate with national and international organizations to formulate the physical structure and development plan of the campus.",
  "Formulate a plan to increase the business capacity of the campus to increase the income towards the internal resources of the campus and coordinate with the relevant stakeholders.",
  "Carry out other duties and responsibilities as directed by the campus head according to T.U. Acts, rules, and regulations.",
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
      <Objectives
        objectives={objectives}
        section="Roles Responsibilties and Rights
"
      />
      <RenderTeamCards title="Officials" Members={Officials} />
    </>
  );
}
import React from "react";
