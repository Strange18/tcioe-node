import AboutComponent from "../AboutComponent";
import earthquakes_lab_img from "../../../assets/research_facilities/earthquakes_lab.jpg";

const data = {
  heading: "Earthquake Lab",
  body_text: "Welcome to the Earthquake Lab at Thapathali Campus, Nepal's first-of-its-kind hub for cutting-edge research in earthquake engineering. Our state-of-the-art facilities and dedicated team address critical issues of earthquake preparedness, structural analysis, and disaster mitigation. Through seismic testing and risk assessments, we aim to create resilient designs and promote earthquake awareness within communities. Together, we strive to safeguard lives and build a more resilient future.",
  img: earthquakes_lab_img,
};

export default function EnergyLab() {
  return (
    <>
      <AboutComponent heading={data.heading} body_text={data.body_text} img={data.img} />
    </>
  );
}
