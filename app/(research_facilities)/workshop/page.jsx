import AboutComponent from "../AboutComponent"

import workshop_lab_img from "../../../assets/research_facilities/workshop_lab.png"

const data = {
    heading: "Workshop Arena",
    body_text: "Thapathali Campus is well-known for its exceptional workshops and laboratories, particularly in the Department of Automobile and Mechanical Engineering. These workshops have gained a reputation as some of the finest in Nepal, owing to the campus's initial focus on a diploma program in automobile and mechanical engineering. The department prioritizes providing students with the best learning experiences possible. Highly qualified instructors diligently maintain the laboratories, ensuring that students have access to state-of-the-art facilities and equipment for their projects. These workshops and laboratories serve as invaluable platforms for students to acquire practical knowledge and hands-on experience in their respective fields. Equipped with modern tools and machinery, students can undertake a diverse range of projects and experiments. The workshops and laboratories embrace the latest technologies and undergo regular updates to remain at the forefront of innovation and foster continuous learning opportunities for students.",
    img: workshop_lab_img
}

export default function EnergyLab() {
    return (
        <>
            <AboutComponent heading={data.heading} body_text={data.body_text} img={data.img} />
        </>
    )
}