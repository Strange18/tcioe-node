"use client";

import Objectives from "@/components/About/Sections/Objective";
import AboutComponent from "../../../(research_facilities)/AboutComponent";

import administrative_img from "/assets/units/administrative.png";
import { RenderTeamCards } from "@/components/RenderTeamCards";
import { useState, useEffect } from "react";
const fetchData = async () => {
  const res = await fetch(
    "https://notices.tcioe.edu.np/api/department/staffs/search/?department=Personnel Administration Section"
  );
  const data = await res.json();
  return data;
};
const data = {
  heading: "Personnel Administration Section",
  body_text: `The administration section at Thapathali Campus oversees various departments and activities, including general administration, finance, academics, examinations, facilities management, and stores. Its main goal is to ensure efficient operations by monitoring staff and student activities, enforcing policies, and managing resources effectively. Additionally, it coordinates events, programs, and partnerships to support campus objectives. The section is divided into Personnel Administration, responsible for staff and faculty records and recruitment, and General Administration, which maintains campus facilities and resources while ensuring compliance with regulations. Effective record-keeping ensures systematic operations aligned with Tribhuvan University's standards.
  `,
  img: administrative_img,
};
const objectives = [
  "Prepare the monthly attendance report of the teachers and staff working in the campus and send it to the financial administration branch for salary and daily incentive allowance.",
  "Taking down the leave details of the teaching staff , verifying whether there is leave or not and keeping records of it.",
  "Establishing personal files of teaching staff and updating the details of working , study leave and other leave and working teaching staff.",
  "Head of Department , Deputy Head of Department , M.Sc. Program Coordinator, chief lay in charge and lay in charge appointment and work related to extension of term.",
  "Compulsory leave , resignation letter from T.U.. For service facilities received from T.U. Preparing letters to be sent to the Personnel Administration Division.",
  "Work related to study leave , visit , work leave , technical service and other services.",
  "Filing of administrative letters available from various offices and manage.",
  "To the teaching staff T.U. Providing information as requested regarding laws and regulations.",
  "T.U. Acts, rules , regulations as directed by the campus head Carrying out other duties and responsibilities.",
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
