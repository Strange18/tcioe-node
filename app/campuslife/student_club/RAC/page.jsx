import React from "react";
import ClubsComponent from "@/components/CampusLife/ClubsComponent";
import rac2 from "/assets/rac2.jpeg";
import RacImageGallery from "@/components/RacGallary";

const page = () => {
  const text = [
    `The Robotics and Automation Center (RAC) stands as one of the oldest and most prominent organizations at Thapathali Campus, serving as the formal body of our esteemed institution. With a rich history, RAC has dedicated itself to the advancement of robotics and technology, consistently pushing the boundaries of innovation.The success of RAC is evident through its remarkable achievements in renowned competitions. From emerging victorious in IIT Techfest, a prestigious tech competition, to securing victories in Yantra, a national robotics competition, RAC has consistently proven its mettle. Moreover, their active participation in various competitions, such as soccers and robo wars, further showcases their unwavering commitment to pushing the boundaries of robotics and automation.
    `,
    `RAC's inclusive approach is reflected in its diverse membership, welcoming students from every faculty within our campus. This interdisciplinary collaboration fosters a vibrant environment where individuals from various backgrounds contribute their unique perspectives and expertise to the field of robotics.
    .Through their tireless efforts, RAC has solidified its position as a pioneering force in the realm of robotics and technology, leaving an indelible mark on the landscape of innovation within our campus and beyond.`,
  ];

  return (
    <>
      <ClubsComponent
        text1={text[0]}
        text2={text[1]}
        img={rac2}
        title="RAC"
      />
      <RacImageGallery
        title={"RAC"}
        description={
          "Witness the Technological Marvels: Our Robotics Gallery!"
        }
      />
    </>
  );
};

export default page;
