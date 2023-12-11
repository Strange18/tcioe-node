"use client";

import Objectives from "@/components/About/Sections/Objective";
import AboutComponent from "../../../(research_facilities)/AboutComponent";

import administrative_img from "/assets/units/administrative.png";

import { RenderTeamCards } from "@/components/RenderTeamCards";
import { useState, useEffect } from "react";

const fetchData = async () => {
  const res = await fetch(
    "https://notices.tcioe.edu.np/api/department/staffs/search/?department=General Administration Section"
  );
  const data = await res.json();
  return data;
};
const fetchImage = async () => {
  const res = await fetch(
    "https://notices.tcioe.edu.np/api/image-search/?image_id=13"
  );
  const data = await res.json();
  return data[0].image;
};

const objectives = [
  "Completing the process of purchasing the necessary items for educational and administrative work requested by the various departments, branches, and units of the campus and sending the purchased items to the store for filing.",
  "Recommending for payment of invoices related to inspection and storage goods.",
  "Requesting the consultancy service to prepare the necessary cost estimate for the construction work to be done on the campus and submit the cost estimate, drawing, and design received from the consultancy service to the procurement committee.",
  "After the recommendation for construction work from the procurement committee, after completing the necessary process, make the contract and give the order.",
  "After the completion of the construction work, the consulting service will pass the inspection, etc., and recommend the payment of the amount from the procurement committee.",
  "According to the nature of the purchase, direct purchase, price list, bid, etc.",
  "Providing necessary support for the internal audit of the purchase and construction works and for the audit of the General Account.",
  "Carrying out other duties and responsibilities as directed by the campus head according to T.U. Acts, rules, and regulations.",
];
export default function page() {
  const [img, setImg] = useState([]);
  const data = {
    heading: "General Administration Section",
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
