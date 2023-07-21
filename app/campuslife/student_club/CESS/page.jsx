import React from "react";
import ClubsComponent from "@/components/CampusLife/ClubComponent";
import cess18 from "/assets/campuslife/CESS/cess18.jpeg";
import Cess_Gallary from "@/components/Cess_Gallary";

const page = () => {
  const text = [
    `Civil Engineering Students' Society (CESS) is a student-run organization at the
    Thapathali Campus that strives to create opportunities for students to develop skills and gain
    knowledge in the field of civil engineering. CESS is dedicated to organizing events, workshops,
    and competitions that promote the learning and growth of civil engineering students and foster a
    sense of community among them. With a focus on academic and professional development, CESS
    aims to provide a platform for students to enhance their skills and gain practical knowledge.
    .`,
    `With a focus on academic and professional development, CESS
    aims to provide a platform for students to enhance their skills and gain practical knowledge.
    CESS has organized several activities and events for the benefit of civil engineering
    students. One of the events was a workshop on Microsoft packages that included practical
    examples and exercises to help students apply their learning effectively. Another noteworthy event
    organized by CESS was a ten-day extensive course on ETABS, a widely used software in the field
    of civil engineering. The course covered topics such as building modeling, analysis, and design,
    and provided students with hands-on experience using the software. CESS also organized a paper
    bridge competition and a mixed design competition to promote innovation and creativity among
    students. Additionally, CESS hosted a Civil Model Competition during UTSARGA with ASIS, an
    annual technical festival organized by the Institute of Engineering, Thapathali Campus. The
    competition encouraged students to showcase their technical skills and knowledge in various
    aspects of civil engineering. Overall, CESS has played a crucial role in providing a platform for
    civil engineering students to develop their skills, knowledge, and practical experience through
    various events and activities.`,
  ];

  return (
    <>
      <ClubsComponent
        text1={text[0]}
        text2={text[1]}
        img={cess18}
        title="CESS"
      />
      <Cess_Gallary
        title={"CESS"}
        description={
          "A college experience transcending beyond just classrooms and lectures. Come and live the Thapathali Experience!"
        }
      />
    </>
  );
};

export default page;
