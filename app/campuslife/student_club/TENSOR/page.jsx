import React from "react";
import ClubsComponent from "@/components/CampusLife/ClubComponent";
import tensor1 from "/assets/campuslife/Tensor/tensor1.jpg";
import Tensor_gallary from "@/components/Tensor_gallary";
const page = () => {
  const text = [
    `The Tensor student club (formed and focused specially on Data Science, AI and ML), is renowned for its exceptional activity and unwavering commitment to fostering a tech-centric learning environment. With a passion for technology and innovation, the Tensor club stands as a thriving hub for like-minded students seeking to delve deeper into the realms of electronics and computer engineering.
    Through a wide array of engaging and insightful workshops, the Tensor club plays a pivotal role in enhancing the educational experience of its members and the broader student community. These workshops are carefully curated by a dedicated team of passionate students, industry professionals, and experienced faculty members, ensuring that participants receive top-notch guidance and access to cutting-edge knowledge..
    .`,
    `The workshops offered by Tensor cover an impressive spectrum of tech-related topics, ranging from fundamental principles and theories to practical hands-on sessions and real-world applications. Beyond their technical prowess, the club's organizers are committed to creating an inclusive and supportive environment that encourages collaboration and idea-sharing. They understand the importance of fostering a strong sense of community within the club, where students can forge valuable connections, learn from one another, and find inspiration to tackle complex technological challenges. In conclusion, the Tensor student club stands as a shining beacon of excellence in the realm of Electronics and Computer Engineering. Through its unwavering dedication to provide high-quality tech-related workshops, fostering a collaborative community, and establishing meaningful industry connections, the club continues to shape the next generation of tech enthusiasts and future leaders in the field.`,
  ];

  return (
    <>
      <ClubsComponent
        text1={text[0]}
        text2={text[1]}
        img={tensor1}
        title="Tensor"
      />
      <Tensor_gallary
        title={"Tensor"}
        description={
          "Witness the Technological Marvels: Our Tensor Gallery!"
        }
      />
    </>
  );
};

export default page;
