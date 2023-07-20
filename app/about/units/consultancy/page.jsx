import AboutComponent from "../../../(research_facilities)/AboutComponent";

import consultancy_img from "/assets/units/consultancy.png";
const data = {
  heading: "Consultancy",
  body_text: `IOE Thapathali Campus's Consultancy Service is crucial for campus infrastructure development, handling tasks like construction, design, and feasibility studies. It hires specialized consultant companies in architecture, civil, and electrical works to ensure high-quality standards. Notably, they successfully completed the DPR for the Balkhu site, where the campus plans to relocate. Their dedication and expertise in various successful projects over the years make them invaluable assets to the campus community, extending their services even to external clients.
  `,
  img: consultancy_img,
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
