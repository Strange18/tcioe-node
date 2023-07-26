"use client";
import { RenderTeamCards } from "@/components/RenderTeamCards";
import React, { useEffect, useState } from "react";

const fetchData = async () => {
  const res = await fetch(
    "https://notices.tcioe.edu.np/api/department/staffmembers/"
  );
  const data = await res.json();
  return data;
};
const Page = () => {
  const [keyOfficials, setKeyOfficials] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setKeyOfficials(data);
    };
    getData();
  }, []);
  let campusChief = keyOfficials.slice(0, 1);
  let assistantCampusChief = keyOfficials.slice(1, 4);
  let hod = keyOfficials.slice(4, 10);
  let dhod = keyOfficials.slice(10, 16);
  let msc = keyOfficials.slice(16, 19);
  let unithead = keyOfficials.slice(19, 23);
  let sectionhead = keyOfficials.slice(23, 25);
  return (
    <div className="flex flex-col justify-center items-center">
      <RenderTeamCards title="Campus Officials" Members={campusChief} />
      <RenderTeamCards title="" Members={assistantCampusChief} />
      <RenderTeamCards title="" Members={hod} />
      <RenderTeamCards title="" Members={dhod} />
      <RenderTeamCards title="" Members={msc} />
      <RenderTeamCards title="" Members={unithead} />
      <RenderTeamCards title="" Members={sectionhead} />
    </div>
  );
};

export default Page;
