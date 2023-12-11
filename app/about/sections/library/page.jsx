"use client";

import Objectives from "@/components/About/Sections/Objective";
import AboutComponent from "../../../(research_facilities)/AboutComponent";

import administrative_img from "/assets/units/administrative.png";

import { RenderTeamCards } from "@/components/RenderTeamCards";
import { useState, useEffect } from "react";

const fetchData = async () => {
  const res = await fetch(
    "https://notices.tcioe.edu.np/api/department/staffs/search/?department=Library Section"
  );
  const data = await res.json();
  return data;
};
const fetchImage = async () => {
  const res = await fetch(
    "https://notices.tcioe.edu.np/api/image-search/?image_id=17"
  );
  const data = await res.json();
  return data[0].image;
};

const objectives = [
  "Prepare a list of books, prepare a list of available books and inform the departmental heads.",
  "To prepare the registration list and library card of new students, staff, and teachers.",
  "Sharing books and arranging books in racks.",
  "Work related to reader awareness and reference service.",
  "Changing book pocket library and cards for new and old books.",
  "To work on the clean sheet of students.",
  "Registering and organizing students' project work and theses.",
  "Keeping records of books in the computer.",
  "Classification and maintenance of books and theses.",
  "Prepare a list of missing books and send them to the departments.",
  "Carry out other duties and responsibilities as directed by the campus head according to Tri.V. Acts, rules, and regulations.",
];
export default function page() {
  const [img, setImg] = useState([]);
  const data = {
    heading: "Library Section",
    body_text: `The Thapathali Campus library serves as a vital hub for academic resources, supporting the educational mission of the institution. Beyond offering essential course materials, the library provides access to an extensive collection of research materials, including project reports and theses, enhancing students' knowledge base. With a comprehensive array of books, reference materials, and computers with high-speed internet, the library facilitates study and collaborative learning in separate halls. In response to the challenges posed by the Covid-19 pandemic, the campus has successfully established an e-library, ensuring uninterrupted access to a vast digital repository of 21,000+ books, 150+ project reports, and 500+ theses. This initiative allows students to remotely access resources, fostering convenience and flexibility, especially for those unable to visit the physical library. The e-library represents a significant advancement in ensuring students have the necessary tools to excel in their studies under any circumstances.
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
