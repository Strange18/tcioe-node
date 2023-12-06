import Objectives from "@/components/About/Sections/Objective";
import AboutComponent from "../../../(research_facilities)/AboutComponent";

import administrative_img from "/assets/units/administrative.png";
const data = {
  heading: "Facilities Section",
  body_text: `The administration section at Thapathali Campus oversees various departments and activities, including general administration, finance, academics, examinations, facilities management, and stores. Its main goal is to ensure efficient operations by monitoring staff and student activities, enforcing policies, and managing resources effectively. Additionally, it coordinates events, programs, and partnerships to support campus objectives. The section is divided into Personnel Administration, responsible for staff and faculty records and recruitment, and General Administration, which maintains campus facilities and resources while ensuring compliance with regulations. Effective record-keeping ensures systematic operations aligned with Tribhuvan University's standards.
  `,
  img: administrative_img,
};
const objectives = [
  "Cleaning the premises and buildings around the campus.",
  "Arranging clean drinking water on campus.",
  "Supervising the security work of the campus and carrying out necessary work.",
  "Monitoring and managing the campus water, electrical equipment, and internet service to ensure they are in good condition.",
  "Maintenance of campus vehicles, educational equipment, furniture, physical structure and necessary cleaning.",
  "Conducting necessary inspections of the chamena house inside the campus and making arrangements related to quality assurance.",
  "Carrying out all maintenance work within the campus.",
  "Carrying out other duties and responsibilities as directed by the campus head according to Tri.V. Acts, rules, and regulations.",
];
export default function page() {
  return (
    <>
      <AboutComponent
        heading={data.heading}
        body_text={data.body_text}
        img={data.img}
      />
      <Objectives objectives={objectives} section="Facilities Section" />
    </>
  );
}
import React from "react";
