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
  return data.filter((member) => member.is_key_official);
};
const Page = () => {
  const [loading, setLoading] = useState(true);

  const [campusChief, setCampusChief] = useState([]);
  const [assistantCampusChief, setAssistantCampusChief] = useState([]);
  const [headsOfDepartment, setHeadsOfDepartment] = useState([]);
  const [deputyHeadsOfDepartment, setDeputyHeadsOfDepartment] = useState([]);
  const [mscCoord, setMscCoord] = useState([]);
  const [headsOfSection, setHeadsOfSection] = useState([]);
  const [headsOfSpecialSection, setHeadsOfSpecialSection] = useState([]);
  const [headsOfUnit, setHeadsOfUnit] = useState([]);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await fetchData();
      setCampusChief(
        data.filter((member) => member.staff_designation === "Campus Chief")
      );
      setAssistantCampusChief(
        data.filter(
          (member) => member.staff_designation === "Assistant Campus Chief"
        )
      );
      setHeadsOfDepartment(
        data.filter(
          (member) => member.staff_designation === "Head of Department"
        )
      );
      setDeputyHeadsOfDepartment(
        data.filter(
          (member) => member.staff_designation === "Deputy Head of Department"
        )
      );
      setHeadsOfSection(
        data.filter((member) => member.staff_designation === "Head, Section")
      );
      setHeadsOfSpecialSection(
        data.filter(
          (member) => member.staff_designation === "Head, Special Section"
        )
      );
      setHeadsOfUnit(
        data.filter((member) => member.staff_designation === "Head, Unit")
      );
      setMscCoord(
        data.filter((member) => member.staff_designation === "MSC_COORD")
      );

      setLoading(false);
    };
    getData();
  }, []);

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
          <RenderTeamCards title="" Members={headsOfDepartment} />
          <RenderTeamCards title="" Members={deputyHeadsOfDepartment} />
          <RenderTeamCards title="" Members={mscCoord} />
          <RenderUnitHeadComponent title="" Members={headsOfUnit} />
          <RenderTeamCards title="" Members={headsOfSection} />
          <RenderTeamCards title="" Members={headsOfSpecialSection} />
        </>
      )}
    </div>
  );
};

export default Page;
