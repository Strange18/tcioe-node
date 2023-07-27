"use client";
import { RenderTeamCards } from "@/components/RenderTeamCards";
import { RenderUnitHeadComponent } from "@/components/RenderUnitHeadComponent";
import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const fetchData = async () => {
  const res = await fetch(
    "https://notices.tcioe.edu.np/api/department/staffmembers/"
  );
  const data = await res.json();
  return data;
};
const Page = () => {
  const [loading, setLoading] = useState(true);
  const [keyOfficials, setKeyOfficials] = useState([]);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await fetchData();
      setKeyOfficials(data);
      setLoading(false);
    };
    getData();
  }, []);

  let campusChief = keyOfficials.slice(0, 1);
  let assistantCampusChief = keyOfficials.slice(1, 4);
  let hod = keyOfficials.slice(4, 10);
  let dhod = keyOfficials.slice(10, 16);
  let msc = keyOfficials.slice(16, 19);
  let unithead = keyOfficials.slice(19, 23);
  let sectionheads = keyOfficials.slice(23, 25);

  return (
    <div className="flex flex-col justify-center items-center">
      {loading ? (
        <div className="h-[100vh] flex justify-center items-center">
          <ClipLoader color={"#7177ff"} loading={loading} size={100} />
        </div>
      ) : (
        <>
          <RenderTeamCards title="Campus Officials" Members={campusChief} />
          <RenderTeamCards title="" Members={assistantCampusChief} />
          <RenderTeamCards title="" Members={hod} />
          <RenderTeamCards title="" Members={dhod} />
          <RenderTeamCards title="" Members={msc} />
          <RenderUnitHeadComponent Members={unithead} />
          <RenderTeamCards title="" Members={sectionheads} />
        </>
      )}
    </div>
  );
};

export default Page;
