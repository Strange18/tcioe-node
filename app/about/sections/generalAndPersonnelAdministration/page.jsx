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
  "Completing the process of purchasing the necessary items for educational and administrative work requested by the various departments, branches, and units of the campus and sending the purchased items to the store for filing.",
  "Recommending for payment of invoices related to inspection and storage goods.",
  "Requesting the consultancy service to prepare the necessary cost estimate for the construction work to be done on the campus and submit the cost estimate, drawing, and design received from the consultancy service to the procurement committee.",
  "After the recommendation for construction work from the procurement committee, after completing the necessary process, make the contract and give the order.",
  "After the completion of the construction work, the consulting service will pass the inspection, etc., and recommend the payment of the amount from the procurement committee.",
  "According to the nature of the purchase, direct purchase, price list, bid, etc.",
  "Providing necessary support for the internal audit of the purchase and construction works and for the audit of the General Account.",
  "Carrying out other duties and responsibilities as directed by the campus head according to T.U. Acts, rules, and regulations."
];
export default function page() {
  const [img, setImg] = useState([]);
  const data = {
    heading: "General/Personnel Administration Section",
    body_text: `The Thapathali Campus encompasses two essential administrative sections. The Personnel Administration section oversees staff and faculty management, maintaining records, monitoring activities, and handling recruitment processes, from analyzing faculty performance for potential promotion to overseeing individuals' tenure from recruitment to retirement or resignation. Moreover, this section manages applications directed to the campus and processes those meant for external institutions. On the other hand, the General Administration section ensures the smooth functioning of campus facilities and resources. This involves tasks like procurement, maintenance of infrastructure and utilities, security, cafeteria quality control, and asset preservation. Additionally, this section is pivotal in documenting operations to comply with Tribhuvan University's regulations, supporting all departments' day-to-day functions.
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
