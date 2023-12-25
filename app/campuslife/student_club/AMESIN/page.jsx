import React from "react";
import ClubsComponent from "@/components/CampusLife/ClubComponent";
import amesin3 from "/assets/campuslife/AMESIN/amesin8.jpeg";
import AmesinGallary from "@/components/Amesin_Gallary";

const page = () => {
  const text = [
    `Automobile Mechanical Engineering Students Innovative Nexus (AMESIN) was
    established as MESIN in 2013. It is a non-profit and non-political group run by students from the
    Department of Automobile and Mechanical Engineering. AMESIN aims to create a platform that
    helps students develop their skills and conduct workshops in collaboration with professionals.
    .`,
    `AMESIN has organized several activities that have helped students learn and grow. In the
    academic year 2079, AMESIN organized an "Experience Sharing Program '' virtually, where
    graduate seniors shared their experiences after graduating from engineering and discussed
    opportunities in Mechanical and Automobile in Nepal. A one-day Auto-Mech Exhibition was held
    on August 5, 2022. The most recent activity was a 13-day workshop on Solid works from
    December 11 to December 23, 2022. These activities have provided students with a platform to
    showcase their skills and gain knowledge from industry experts.`,
  ];

  return (
    <>
      <ClubsComponent
        text1={text[0]}
        text2={text[1]}
        img={amesin3}
        title="AMESIN"
      />
      <AmesinGallary
        title={"AMESIN"}
        description={
          "Witness the Technological Marvels: Our AMESIN Gallery!"
        }
      />
    </>
  );
};

export default page;
