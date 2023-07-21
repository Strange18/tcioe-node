import React from "react";
import ClubsComponent from "@/components/CampusLife/ClubComponent";
import asis1 from "/assets/campuslife/ASIS/asis11.jpg";
import Asis_Gallary from "@/components/Asis_Gallary";

const page = () => {
  const text = [
    `Architecture Student's Innovative Society (ASIS) is a student organization at Thapathali
    Campus, that fall under the Department of Architecture and is committed to nurturing the creative
    and professional development of its members. Founded by a group of enthusiastic architecture
    students, the society aims to create a platform for students to explore their passion for architecture
    and to promote sustainable and socially responsible design.
    .`,
    `ASIS organizes a variety of events and activities to help students enhance their knowledge
    and skills in the field of architecture. The society hosts design competitions, workshops, seminars,
    and exhibitions throughout the year. The workshops and seminars cover a wide range of topics,
    from sustainable design practices to the use of renewable energy sources. ASIS also encourages
    its members to participate in community service activities that focus on sustainability and
    environmental conservation. Recently, the society organized a two-day design workshop in
    collaboration with @aforarchitecture_afa, where students brainstormed creative ideas during the
    initial design process and explored the creative process of idea generation. Additionally, ASIS
    conducted a webinar on Concept approach and development on 12 June 2022 to further enhance
    the skills of its members. In UTSARGA 2079 Magh 14-15, ASIS, in collaboration with CESS,
    organized a design competition for an EV charging station with the essence of architecture students
    to amplify their design ideas and credits.
    `,
  ];

  return (
    <>
      <ClubsComponent
        text1={text[0]}
        text2={text[1]}
        img={asis1}
        title="ASIS"
      />
      <Asis_Gallary
        title={"ASIS"}
        description={
          "A college experience transcending beyond just classrooms and lectures. Come and live the Thapathali Experience!"
        }
      />
    </>
  );
};

export default page;
