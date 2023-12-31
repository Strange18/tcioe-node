"use client";

import AboutComponent from "../../../(research_facilities)/AboutComponent";
import Objectives from "@/components/About/Sections/Objective";
import emis_img from "/assets/units/emis.png";
import { RenderTeamCards } from "@/components/RenderTeamCards";
import { useState, useEffect } from "react";
const fetchData = async () => {
  const res = await fetch(
    "https://notices.tcioe.edu.np/api/department/staffs/search/?department=Education Management Information System Unit"
  );
  const data = await res.json();
  return data;
};
const fetchImage = async () => {
  const res = await fetch(
    "https://notices.tcioe.edu.np/api/image-search/?image_id=19"
  );
  const data = await res.json();
  return data[0].image;
};

const objectives = [
  "Collecting, collecting and analyzing the human (teachers, staff and students) and material resources available on the campus.",
  "By managing the information and communication technology of the campus, establish it as an 'Information and Communication Center'.",
  "To prepare the work of every department and branch of the campus through computer technology.",
  "To computerize the library of this campus and arrange E-Library.",
  "To organize the internet facility and website of this campus.",
  "Arrange to provide necessary information and data to this campus, University Grants Commission, Dean's Office, various governmental, semi-governmental, private, non-governmental, international non-governmental organizations/organizations/organizations and individuals at various times.",
  "To do other assigned work related to EMIS.",
];

export default function page() {
  const [img, setImg] = useState([]);
  const data = {
    heading: "EMIS Unit",
    body_text: `Established in 2016, the EMIS Unit at Thapathali Campus has significantly advanced IT operations and infrastructure. Their achievements include implementing a QR-based ID card and character certificate system for students, enhancing Wi-Fi bandwidth from 50 to 85 Mbps without extra cost, and expanding Wi-Fi coverage to 31 campus areas. They also improved server performance by increasing server RAM from 4 to 18 GB and installing a NAS system. The campus website software was upgraded, and a new campus email system (@tcioe.edu.np) was introduced for all staff and students. A Wi-Fi hotspot capable of handling 3000 users was created, while the server room received air conditioning and a power backup system. For security, the CCTV system was upgraded to IP-based NVR, and 41 additional cameras were installed. The unit also manages the ERA-SOFT software for educational management, which allows online admissions. Overall, the EMIS unit has played a crucial role in digitalizing campus operations, boosting security, and enhancing student and staff services.`,
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
      <Objectives objectives={objectives} section="Main Objectives" />
      <RenderTeamCards title="Officials" Members={Officials} />
    </>
  );
}
