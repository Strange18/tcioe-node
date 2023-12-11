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
const fetchImage = async () => {
  const res = await fetch(
    "https://notices.tcioe.edu.np/api/image-search/?image_id=14"
  );
  const data = await res.json();
  return data[0].image;
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
  const [img, setImg] = useState([]);
  const data = {
    heading: "Personnel Administration Section",
    body_text: `The Personnel Administration section of the Thapathali Campus is responsible for
    maintaining records and monitoring the activities of staff and faculty members. This includes
    maintaining daily attendance records, analyzing faculty performance for potential promotion, and
    overseeing the recruitment of new staff members. The section is also responsible for monitoring
    the performance of individual staff and faculty members from their recruitment to their retirement
    or resignation. In addition, the personnel administration section houses applications from different
    institutions and organizations that are addressed to Thapathali Campus and provides access to any
    applications that need to be processed by the campus for other institutions.
    `,
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
      <Objectives
        objectives={objectives}
        section="Roles, Responsibilties and Rights
        "
      />
      <RenderTeamCards title="Officials" Members={Officials} />
    </>
  );
}
import React from "react";
