import React from "react";
import ClubsComponent from "@/components/CampusLife/ClubsComponent";
import rac2 from "/assets/rac2.jpeg";
import RacImageGallery from "@/components/RacGallary";

const page = () => {
  const text = [
    `Robotics and Automation center (RAC) at Thapathali Campus, TU offers a wide range
    of programs for students interested in robotics and automation. The center provides courses in
    Robotics and Automation, Control Systems, Mechatronics, and Artificial Intelligence. These
    courses offer students practical knowledge in the field, preparing them for a career in the industry.
    The center also provides research opportunities for students, and they are guided by experienced
    faculty members. Students from the Automobile and Mechanical, Industrial, Electronics, and
    Computer engineering departments work cohesively in Robotics and Automation Center for
    various projects and competitions..
    .`,
    `RAC's inclusive approach is reflected in its diverse membership, welcoming students from every faculty within our campus. This interdisciplinary collaboration fosters a vibrant environment where individuals from various backgrounds contribute their unique perspectives and expertise to the field of robotics.
    .Through their tireless efforts, RAC has solidified its position as a pioneering force in the realm of robotics and technology, leaving an indelible mark on the landscape of innovation within our campus and beyond.In addition to programs, the RAC at Thapathali Campus also organizes competitions and
    training programs for students. In the academic year 2079, RAC participated, organized, and won
    several competitions including the International Micro mouse Challenge held at IIT Bombay with
    the first runner-up position. It also organized Robotic Week Jestha 29-3 Ashar, which was a great
    opportunity for students to showcase their skills and knowledge in the field. Furthermore, it has
    organized a one-week training program on Aeromodelling and PCB design and fabrication,
    allowing students to learn and experiment with the latest technology. These programs and
    competitions were a great way for students to gain practical experience, showcase their skills, and
    learn from industry experts.`,
  ];

  return (
    <>
      <ClubsComponent
        text1={text[0]}
        text2={text[1]}
        img={rac2}
        title="RAC"
      />
      <RacImageGallery
        title={"RAC"}
        description={
          "Witness the Technological Marvels: Our Robotics Gallery!"
        }
      />
    </>
  );
};

export default page;
