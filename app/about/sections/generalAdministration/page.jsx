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
    body_text: `The General Administration section of the Thapathali Campus is responsible for ensuring
    that the campus facilities are well-maintained and meet the needs of students, faculty, and staff.
    The section's day-to-day activities include procurement, repair and maintenance, water supply
    management, maintenance of bathroom facilities, security, infrastructure maintenance, quality
    control of the cafeteria, and preservation of fixed and liquidated assets of the campus. This section
    plays a crucial role in ensuring the systematic operations of the day-to-day activities of the campus
    by providing support and resources to all departments. In addition to managing facilities and
    resources, the general administration section performs effective record-keeping to ensure that all
    operations are documented and comply with regulations set forth by Tribhuvan University.
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
