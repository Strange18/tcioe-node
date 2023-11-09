"use client";

import React, { useEffect } from "react";
import AboutHeroComponents from "@/components/About/AboutHeroComponents";
import thc from "/assets/about/thc.png";
import HistoryComponent from "@/components/About/HistoryComponent";
import historypic from "/assets/about/history.png";
import kingmanhendra from "/assets/about/kingmahendra.png";
import MissionsComponent from "@/components/About/MissionsComponent";

const page = () => {
  const msg = [
    `In the presence of Late King Mahendra, Late Dr. Heinrich Lubke,   Presendent of Federal Republic of Germany inaugurated Technical   Institute (TTI) on 29th of Falgun 2023 B.S.(13th March 1967). The   Technical Training Institute(TTI) offered midlevel manpower course in   mechanical engineering, automobile engineering, electrical engineering   and mechanical drafting beginning. With the assistance from the   Government of Federal republic of Germany, Technical Training   Institute Project (TTIP) was established in Nepal in 2019 B.S.(1963   AD), with the sole objective of producing trained tradespersons and   technicians needed for the development of the country. TTI started   three years vocational training in Mechanical, Automobile and   Electrical trades for S.L.C. graduates from 2022 B.S.(1966 AD) to 2024   B.S. (1968 AD) At the meantime, the three years course in Mechanical   Drafting was transferred to Pulchowk, IOE.`,
    `Thapathali Campus, formerly known as Technical Training Institute   (TTI), was renamed and became part of Tribhuvan University (T.U.) as   the Institute of Engineering in 1973 AD. In 1977 AD, the campus   introduced a two-year proficiency certificate level (PCL) course for   SLC students. In 1987 AD, it started offering three-year diploma   courses in Mechanical Engineering and Automobile Engineering. In 2002   AD, diploma programs in Electronics Engineering and Computer   Engineering were added. The Institute of Engineering (IOE) policy led   to the introduction of Bachelor's programs: Industrial Engineering in   2006 AD, Civil Engineering in 2066 BS, Electronics and Communication   Engineering in 2067 BS, and Mechanical Engineering in 2068 BS. New   intakes in diploma courses ceased in 2014 AD. The campus expanded   further with the addition of Bachelor's in Architecture and M.Sc. in   Earthquake Engineering in 2015 AD, Bachelor's in Automobile   Engineering in 2016 AD, and M.Sc. in Mechanical Design & Manufacturing   in 2017 AD. The most recent addition is the M.Sc. in Informatics and   Intelligent Systems Engineering in 2020 AD, conducted in the evening   session.`,
  ];
  return (
    <div>
      <AboutHeroComponents text1={msg[0]} text2={msg[1]} img={thc} />
      <HistoryComponent
        photo1={{
          src: historypic,
          alt: "Photo of epigraphy of inauguration of Thapathali campus",
          caption: "Epigraphy of inauguration of Thapathali campus",
        }}
        photo2={{
          src: kingmanhendra,
          alt: "Photo of inauguration by Late King Mahendra B.B. Shah and German Chancellor Dr.Heinrich Lubke",
          caption:
            "Inauguration by Late King Mahendra B.B. Shah and German Chancellor Dr.Heinrich Lubke",
        }}
      />
      <MissionsComponent
        mission={{
          heading: "Mission",
          title: "Empowering Engineers for Real-World Impact",
          description:
            "We aim to provide a transformative educational experience, cultivate innovation and research, and produce highly skilled engineers capable of solving real-world problems and contributing to the advancement of society.",
        }}
        vision={{
          heading: "Vision",
          title: "Global Engineering Excellence",
          description:
            "Our vision is to be a leading engineering campus globally recognized for academic excellence, research, innovation, and societal impact.",
        }}
        values={{
          heading: "Values",
          title: "Excellence, Innovation, Integrity, Inclusivity and Sustainability",
          description:
            "We uphold the principles of Excellence: Striving for the highest standards in teaching, research, and student development; Innovation: Encouraging creativity, entrepreneurship, and interdisciplinary collaboration; Integrity: Upholding ethical behavior, honesty, and accountability; Inclusivity: Fostering a diverse and inclusive community that respects the values of all individuals; and Sustainability: Promoting environmentally conscious practices and solutions.",
        }}
      />
    </div>
  );
};
export default page;
