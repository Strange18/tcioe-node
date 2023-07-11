import React from "react";
import HeroComponent from "@/components/HeroComponent";
import MissionsComponent from "@/components/MissionsComponent";

import mission from "@/assets/about/mvv/mission.jpg";
import visions from "@/assets/about/mvv/visions.jpg";
import value from "@/assets/about/mvv/value.jpg";
import hero from "/assets/heroDOECE.png";

const programs_data = [
  {
    id: 1,
    name: "Our Missions",
    description:
      " Our Mission at Thapathali Campus is to provide a transformative and holistic educational experience that empowers students to achieve their full potential. We are dedicated to fostering a vibrant learning community that nurtures intellectual curiosity, critical thinking, creativity, and personal growth. Through our commitment to academic excellence, inclusivity, and ethical values, we aim to prepare our students to become responsible global citizens and future leaders in their chosen fields.By upholding these principles and continually innovating our educational practices, we strive to be a leading institution that sets the standard for excellence in higher education. Our mission is not only to educate but also to inspire, empower, and transform the lives of our students, preparing them to make a meaningful difference in the world.",
    image: mission,
  },
  {
    id: 2,
    name: "Our Visions",

    description:
      "Our Vision is to be a premier educational institution that sets the standard for excellence in higher education. We aspire to create an environment where students thrive academically, intellectually, and socially, enabling them to make a positive impact in their communities and the world at large. We envision a campus that embraces innovation, embraces diversity, and promotes lifelong learning. By cultivating a culture of continuous improvement and adaptability, we strive to be at the forefront of education, anticipating and meeting the evolving needs of our students and society.",

    image: visions,
  },
  {
    id: 3,
    name: "Our Values",
    description:
      "At Thapathali Campus, our values are the guiding principles that shape our campus community. We are committed to excellence, upholding the highest standards in education and fostering a culture of continuous improvement. Integrity is at the core of our actions, promoting honesty, transparency, and ethical behavior. Inclusivity is paramount, embracing diversity and creating an environment where every individual feels welcomed and respected. Collaboration is encouraged, as we believe in the power of teamwork and cooperation. We treat everyone with respect, fostering a culture of dignity and kindness. Lifelong learning is valued, promoting intellectual curiosity and personal growth. Community engagement is vital, encouraging social responsibility and active participation in making a positive impact. These values define our campus culture and guide us in fulfilling our mission of providing a transformative education experience..",
    image: value,
  },
];
const Page = () => {
  return (
    <>
      <div>
        <HeroComponent img={hero} />
        <MissionsComponent programs={programs_data} />
      </div>
    </>
  );
};

export default Page;
