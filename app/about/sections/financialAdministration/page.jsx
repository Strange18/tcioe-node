import Objectives from "@/components/About/Sections/Objective";
import AboutComponent from "../../../(research_facilities)/AboutComponent";

import administrative_img from "/assets/units/administrative.png";
const data = {
  heading: "Financial Administration Section",
  body_text: `The administration section at Thapathali Campus oversees various departments and activities, including general administration, finance, academics, examinations, facilities management, and stores. Its main goal is to ensure efficient operations by monitoring staff and student activities, enforcing policies, and managing resources effectively. Additionally, it coordinates events, programs, and partnerships to support campus objectives. The section is divided into Personnel Administration, responsible for staff and faculty records and recruitment, and General Administration, which maintains campus facilities and resources while ensuring compliance with regulations. Effective record-keeping ensures systematic operations aligned with Tribhuvan University's standards.
  `,
  img: administrative_img,
};
const objectives = [
  "Preparation of annual budget and consolidated financial statement related to regular, internal resources, development, and consulting services and submitting that statement to T.U. in TU BIM Software related to finances.",
  "To deal with the salary, allowances, civic investment fund, provident fund, and tax deduction (E-TDS) of the teachers and staff working in the campus.",
  "After the purchase process is completed, check the bills received according to the rules and perform the payment and bond related work.",
  "To do all the work related to financial matters during the admission of new students.",
  "Establishing personal ledger of studying students, keeping records of tuition fees and bonds, collecting income and working related to bond refund.",
  "Handling salary, visit, expenses, and other submissions.",
  "Conducting internal audit, general audit, work related to unduly remittances and audits, and bank account reconciliations.",
  "Doing work related to University Grants Commission and scholarships provided by the campus.",
  "Sharing information related to financial details and financial transactions.",
  "Conducting activities related to making regular and internal inquiries and asking for withdrawals.",
  "Keeping records of decisions and proof documents related to finances at different times.",
  "Baking and related work.",
  "Prepare letters of recommendation as requested by teaching staff and students.",
  "Carrying out other duties and responsibilities as directed by the campus head according to T.U. Acts, rules, and regulations.",
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
        section="Financial Administration Section"
      />
    </>
  );
}
import React from "react";
