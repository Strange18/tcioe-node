import AboutComponent from "../AboutComponent";
import energy_lab_img from "../../../assets/research_facilities/energy_lab.png";

const data = {
  heading: "Informatics Lab",
  body_text: "The Department of Automobile and Mechanical Engineering at Thapathali Campus has actively engaged students in extracurricular activities focused on energy conservation and electric vehicles. By organizing energy audits and promoting the use of electric vehicles, students gained valuable knowledge about energy conservation and the benefits of electric transportation. These initiatives not only developed practical skills but also raised awareness about sustainable energy solutions. The Energy System Research Laboratory (ESRL) within the department has emerged as a leading research facility, conducting groundbreaking research on energy modeling in South Asia. Under the guidance of Assistant Professor Dr. Khem Gyanwali, the laboratory's research assistants have made significant contributions to the field. Ongoing projects at ESRL are advancing our understanding of renewable energy, energy efficiency, and energy storage. The Energy Modeling Research Group is exploring innovative ways to harness renewable energy, while the Advanced Computation Research Group is developing neural network models for various applications. Future projects include locating optimal EV charging stations and developing guidelines for transforming conventional vehicles into electric ones. With dedicated faculty members and promising projects, the Energy System Research Lab is poised for continued success.",
  img: energy_lab_img,
};

export default function EnergyLab() {
  return (
    <>
      <AboutComponent heading={data.heading} body_text={data.body_text} img={data.img} />
    </>
  );
}
