"use client";

import AboutComponent from "../../../(research_facilities)/AboutComponent";
import Objectives from "@/components/About/Sections/Objective";
import consultancy_img from "/assets/units/consultancy.png";

import { RenderTeamCards } from "@/components/RenderTeamCards";
import { useState, useEffect } from "react";
const fetchData = async () => {
  const res = await fetch(
    "https://notices.tcioe.edu.np/api/department/staffs/search/?department=Material Testing Laboratory Unit"
  );
  const data = await res.json();
  return data;
};
const data = {
  heading: "Consultancy Services Unit",
  body_text: `IOE Thapathali Campus's Consultancy Service is crucial for campus infrastructure development, handling tasks like construction, design, and feasibility studies. It hires specialized consultant companies in architecture, civil, and electrical works to ensure high-quality standards. Notably, they successfully completed the DPR for the Balkhu site, where the campus plans to relocate. Their dedication and expertise in various successful projects over the years make them invaluable assets to the campus community, extending their services even to external clients.
  `,
  img: consultancy_img,
};
const objectives = [
  "Under T.U., prepare detailed project reports for the Nepal government, provincial governments, and local governments to prepare infrastructures, renovations, and maintenance, as well as providing technical consulting services and supervision in other engineering disciplines.",
  "Estimate cost, design, drawing, and other technical work to build campus infrastructure and development.",
  "Provide opportunities for Practicum to enhance students' capacity and gain practical knowledge.",
  "Provide technical consultancy services to various organizations and increase the income of the internal resources of the campus and spend it on the educational upgradation of the campus.",
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
