import React from "react";
import PujaComponent from "@/components/CampusLife/PujaComponent";
import utsarga from "/assets/campuslife/utsarga.png";
import CampusImageGallery from "@/components/CampusImageGallery";

const page = () => {
  const text = [
    `UTSARGA, a two-day event, was held at the Thapathali Campus in Kathmandu, organized by CESS-Thapathali Campus and ASIS. Aimed at highlighting architectural and civil engineering disciplines, the event provided a platform for students from Thapathali and other engineering colleges in Nepal to exhibit their work. The event, held on 14th and 15th Magh, 2079, was a resounding success, with the participation and support of numerous esteemed guests and renowned personalities.`,
    `The event featured diverse programs such as a design competition, acoustic night, games, food stalls, and civil model competitions. The design competition, comprising both intra-college and inter-college competitions, saw the award ceremony during the main event. The highlight was the evening's musical program, featuring various artists and bands. Moreover, the civil model competition required participants to present scaled physical models of civil engineering subject-related structures, attracting students from different colleges. The success of UTSARGA was credited to the dedicated organizing team and the enthusiastic participation and support of the guests and participants.`,
  ];

  return (
    <>
      <PujaComponent
        text1={text[0]}
        text2={text[1]}
        img={utsarga}
        title="Utsarga"
      />
      <CampusImageGallery
        title={"Campus Techfests"}
        description={
          "Venture into the world of innovation and technology. Experience the exhilarating Techfest at Thapathali Campus!"
        }
      />
    </>
  );
};

export default page;
