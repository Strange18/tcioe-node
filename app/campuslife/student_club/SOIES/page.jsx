import React from "react";
import ClubsComponent from "@/components/CampusLife/ClubComponent";
import soies1 from "/assets/campuslife/SOIES/soies15.jpeg";
import Soies_Gallary from "@/components/Soies_Gallary";

const page = () => {
  const text = [
    `Society of Industrial Engineering Students (SOIES) Nepal has been a dynamic
    community of students committed to promoting industrial engineering education and research in
    the Thapathali Campus.The organization has been actively engaging students and professionals
    in various activities,including the Research Article Writing Competition held on January 18, 2023.
    This competition was a great opportunity for students to showcase their research skills and
    knowledge in the field of industrial engineering. SOIES Nepal also organized a Welcome and
    Farewell program on December 24, 2022, to celebrate the new members and say goodbye to those
    who were leaving.
    .`,
    `This event was a great way to bring the community together and strengthen the
    bonds between its members. SOIES Nepal launched the Industrial Vision Vol 8.0 2022 Magazine
    in an event held last year. This magazine provides a platform for industrial engineering students
    to publish their research articles and share their knowledge with a wider audience. To enhance the
    skills and knowledge of its members, the organization conducted an 11-day workshop on DS Solid
    works essentials in June 2022. This workshop was a great success and provided students with
    hands-on experience in using Solid works, a popular 3D CAD software used in the field of industrial engineering. Overall, through its various activities and initiatives, SOIES Nepal
    continues to inspire and empower the next generation of industrial engineers.`,
  ];

  return (
    <>
      <ClubsComponent
        text1={text[0]}
        text2={text[1]}
        img={soies1}
        title="SOIES"
      />
      <Soies_Gallary
        title={"SOIES"}
        description={
            "A college experience transcending beyond just classrooms and lectures. Come and live the Thapathali Experience!"
        }
      />
    </>
  );
};

export default page;
