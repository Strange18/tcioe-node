import Objectives from "@/components/About/Sections/Objective";
import AboutComponent from "../../../(research_facilities)/AboutComponent";

import administrative_img from "/assets/units/administrative.png";
const data = {
  heading: "Library Section",
  body_text: `The administration section at Thapathali Campus oversees various departments and activities, including general administration, finance, academics, examinations, facilities management, and stores. Its main goal is to ensure efficient operations by monitoring staff and student activities, enforcing policies, and managing resources effectively. Additionally, it coordinates events, programs, and partnerships to support campus objectives. The section is divided into Personnel Administration, responsible for staff and faculty records and recruitment, and General Administration, which maintains campus facilities and resources while ensuring compliance with regulations. Effective record-keeping ensures systematic operations aligned with Tribhuvan University's standards.
  `,
  img: administrative_img,
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
  return (
    <>
      <AboutComponent
        heading={data.heading}
        body_text={data.body_text}
        img={data.img}
      />
      <Objectives objectives={objectives} section="Library Section" />
    </>
  );
}
import React from "react";
