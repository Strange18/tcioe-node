import AboutComponent from "../../../(research_facilities)/AboutComponent";

import rdunit_img from "/assets/units/rdunit.png";

const data = {
  heading: "Research and Development Unit",
  body_text: `Thapathali Campus has a dedicated Research and Development Unit that is responsible for promoting research activities among faculty members and students. This unit provides support to researchers by offering research grants, facilitating collaborations, and providing access to various research facilities. Er. Sugam Maharjan led this unit and with his vast knowledge and experience in research, the unit encouraged and promoted research activities among faculty members and students. The unit has been successful in securing research grants and fostering collaborations with national and international research organizations. The efforts of this unit have been instrumental in enhancing the research culture at Thapathali Campus and creating opportunities for faculty and students to contribute to the development of science and technology in Nepal.`,
  img: rdunit_img,
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
