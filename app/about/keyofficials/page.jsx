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
  let members = keyOfficials.slice(1, -1);
  return (
    <>
      <RenderTeamCards title="Campus Officials" Members={campusChief} />
      <RenderTeamCards title="" Members={members} />
    </>
  );
};

export default Page;
