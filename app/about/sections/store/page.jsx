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
    body_text: `The Main Store at Thapathali Campus serves as a pivotal component in the institution's daily operations by storing and managing tools and materials essential for various functions. These materials are categorized into daily usage items, such as stationery, cleaning products, electrical equipment, and computer accessories, as well as capitalized materials, including computers, furniture, and machinery. The store unit is responsible for transparent and financially accountable procurement processes, adhering to Tribhuvan University regulations. It oversees the storage, issuance, and proper supply operations for the campus. Additionally, the Main Store monitors inventories, implements inventory control plans, and ensures an ample supply of materials for daily operations. The section also manages the environmentally conscious disposal of disregarded materials. Overall, the Main Store's commitment to maintaining inventory, regulatory compliance, and financial transparency plays a critical role in the efficient and effective functioning of Thapathali Campus.
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
