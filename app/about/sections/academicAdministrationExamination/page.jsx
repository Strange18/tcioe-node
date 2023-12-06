import Objectives from "@/components/About/Sections/Objective";
import AboutComponent from "../../../(research_facilities)/AboutComponent";

import administrative_img from "/assets/units/administrative.png";
const data = {
  heading: "Academic Administration and Examination Section",
  body_text: `The administration section at Thapathali Campus oversees various departments and activities, including general administration, finance, academics, examinations, facilities management, and stores. Its main goal is to ensure efficient operations by monitoring staff and student activities, enforcing policies, and managing resources effectively. Additionally, it coordinates events, programs, and partnerships to support campus objectives. The section is divided into Personnel Administration, responsible for staff and faculty records and recruitment, and General Administration, which maintains campus facilities and resources while ensuring compliance with regulations. Effective record-keeping ensures systematic operations aligned with Tribhuvan University's standards.
  `,
  img: administrative_img,
};
const objectives = [
  "To do the work related to the admission of undergraduate and postgraduate programs run on the campus and to provide the list of enrolled students to the departments.",
  "Keeping records of students' personal files, updating details.",
  "To do registration related work of newly admitted students in Tribhuvan University.",
  "Keeping a record of internal assessment and also sending that record to the Examination Control Division.",
  "After publishing the result, collecting the mark sheet from the examination control division, sending it to the department and filing it in the personal file of the students.",
  "Work related to the scholarship provided by the campus.",
  "Prepare letters of recommendation and character certificates as requested by students.",
  "To send the letter, routine and final result of the practical examination to the examination control division.",
  "The exam form provided by the students to enter into the software.",
  "Print and distribute admit cards.",
  "Seat to conduct the examination by printing the list of candidates Plan and attend and keep records.",
  "To do all the work related to conducting regular and re-examination.",
  "Triplicate printing.",
  "T.U. Acts, rules, regulations as directed by the campus head Carrying out other duties and responsibilities.",
];
export default function page() {
  return (
    <>
      <AboutComponent
        heading={data.heading}
        body_text={data.body_text}
        img={data.img}
      />
      <Objectives
        objectives={objectives}
        section="Academic Administration and Examination Section"
      />
    </>
  );
}
import React from "react";
