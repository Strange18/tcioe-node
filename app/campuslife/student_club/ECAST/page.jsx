import React from "react";
import ClubsComponent from "@/components/CampusLife/ClubComponent";
import ecast9 from "/assets/campuslife/ECAST/ecastimg.jpeg";
import EcastGallary from "@/components/Ecast_Gallary";

const page = () => {
  const text = [
    `Thapathali Campus
    successfully continued its operations and conducted various activities. Since 2016, ECAST has
    been organizing one-day to week-long training workshops and seminars for students from more
    than 40 high school students and undergraduate colleges. ECAST has also collaborated with other
    youth organizations on campus to conduct exhibitions, live events, and competitions. ECAST
    Thapathali conducted several events, including online workshops and a talk show with business
    entrepreneurs in the engineering field. These events have helped boost the morale of students and
    provided them with practical knowledge and skills. Some of the events conducted by ECAST last
    year include Coding Universe 1.0, Game Development Session, Flutter Training, Django
    Workshop, and Linux Workshop.
    .`,
    `ECAST also organized several successful events last year, such as the Web App
    Development with Python Django workshop on August 26, 2022, the Cloud Computing with
    Microsoft Azure and Deploying Web Apps workshop on July 28, 2022, and the Linux Workshop
    in Jestha 26. In addition, ECAST conducted the Competitive Programming event from July 17 to
    22, 2022. Overall, ECAST has made significant contributions to the education and training of
    students in the electronics and computer field.
    `,
  ];

  return (
    <>
      <ClubsComponent
        text1={text[0]}
        text2={text[1]}
        img={ecast9}
        title="ECAST"
      />
      <EcastGallary
        title={"ECAST"}
        description={
          "Witness the Technological Marvels: Our ECAST Gallery!"
        }
        content={ecast9}
      />
    </>
  );
};

export default page;