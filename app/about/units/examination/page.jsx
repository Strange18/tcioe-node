import AboutComponent from "../../../(research_facilities)/AboutComponent";

import staff_exam_img from "/assets/units/staff_exam.png";
const data = {
  heading: "Examination Section",
  body_text: `The Exam and Academic Administration section at Thapathali Campus plays a vital role in ensuring a seamless academic experience for students from admission to graduation. They closely collaborate with students, offering services related to examinations, internal assessments, and academic processes. They meticulously handle admission preparations, track internal assessments, announce scholarship recipients, and efficiently distribute mark sheets. Moreover, they assist with TU registration and ID card issuance, ensuring students receive essential support throughout their academic journey, contributing to their overall success at the institution.
  `,
  img: staff_exam_img,
};

export default function page() {
  return (
    <>
      <AboutComponent
        heading={data.heading}
        body_text={data.body_text}
        img={data.img}
      />
    </>
  );
}
