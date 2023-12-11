"use client";

import Objectives from "@/components/About/Sections/Objective";
import AboutComponent from "../../../(research_facilities)/AboutComponent";

import administrative_img from "/assets/units/administrative.png";

import { RenderTeamCards } from "@/components/RenderTeamCards";
import { useState, useEffect } from "react";
const fetchData = async () => {
  const res = await fetch(
    "https://notices.tcioe.edu.np/api/department/staffs/search/?department=Store Section"
  );
  const data = await res.json();
  return data;
};
const fetchImage = async () => {
  const res = await fetch(
    "https://notices.tcioe.edu.np/api/image-search/?image_id=16"
  );
  const data = await res.json();
  return data[0].image;
};

const objectives = [
  "After the purchase process has been completed, inspect the goods and enter them into the store.",
  "Maintain records of the income of purchased or subsidized goods and the daily expenses and capital goods according to the demand form approved by various departments, branches, and units.",
  "After the purchase process is completed, send the amount received according to the will to the financial administration branch for payment.",
  "Ensure stock items are stored in the store in a visible manner.",
  "Conduct annual examination of internal audit and examiners from the Auditor General's office.",
  "Keep a record of the goods received from various departments, branches, and units in case of non-use and send them to the general administration, proceeding with the auction process as per the rules.",
  "Carry out other duties and responsibilities as directed by the campus head according to Tri.V. Acts, rules, and regulations.",
];
export default function page() {
  const [img, setImg] = useState([]);
  const data = {
    heading: "Store Section",
    body_text: `The administration section at Thapathali Campus oversees various departments and activities, including general administration, finance, academics, examinations, facilities management, and stores. Its main goal is to ensure efficient operations by monitoring staff and student activities, enforcing policies, and managing resources effectively. Additionally, it coordinates events, programs, and partnerships to support campus objectives. The section is divided into Personnel Administration, responsible for staff and faculty records and recruitment, and General Administration, which maintains campus facilities and resources while ensuring compliance with regulations. Effective record-keeping ensures systematic operations aligned with Tribhuvan University's standards.
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
