import AboutComponent from "../AboutComponent";
import informatics_lab_img from "../../../assets/research_facilities/informatics_lab.jpg";

const data = {
  heading: "Informatics Lab",
  body_text: "As a center of excellence in informatics, our lab is at the forefront of technological innovation and research. We are dedicated to exploring the dynamic world of information science, data analysis, and computational intelligence. Equipped with cutting-edge technology and supported by a team of skilled experts, we delve into diverse areas, including artificial intelligence, machine learning, data mining, and bioinformatics.",
  img: informatics_lab_img,
};

export default function EnergyLab() {
  return (
    <>
      <AboutComponent heading={data.heading} body_text={data.body_text} img={data.img} />
    </>
  );
}
