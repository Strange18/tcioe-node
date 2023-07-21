import React from "react";
import PujaComponent from "@/components/CampusLife/PujaComponent";
import saraswatipuja from "/assets/campuslife/Saraswati_Puja/saraswatiPuja.png";
import Saraswati_Puja_Gallary from "@/components/Saraswati_Puja_Gallary";

const page = () => {
  const text = [
    `Nepal Terai Bidhyarthi Sangh (NTBS), Thapathali Campus, successfully organized the 23rd Saraswati Puja and Cultural Program on 12th Magh, 2079 B.S. This event holds significant value for our institution, being celebrated annually with immense enthusiasm. The day began with the puja at 7:30 AM, which was subsequently followed by the distribution of prasad and tika to everyone present. At 10 AM, the cultural program began, offering a platform for students to display their artistic skills.`,
    `The performances encompassed various forms of performing arts, such as Ethnic Cultural Dance, Singing, Comedy Acts, Drama, Shayari, Gazal, and Muktak. The talent exhibited by the students was awe-inspiring, filling the institution with pride. Furthermore, the campus acknowledged the efforts of the best performers with prizes and awards, reinforcing their passion for the arts. It's believed that such events are instrumental in fostering community spirit by uniting faculty members and students in a celebratory atmosphere.`,
  ];

  return (
    <>
      <PujaComponent
        text1={text[0]}
        text2={text[1]}
        img={saraswatipuja}
        title="Saraswati Puja"
      />
      <Saraswati_Puja_Gallary
        title={"Campus Festivals"}
        description={
          "Step in and embrace the enriching Saraswati Puja and Cultural Program Experience at Thapathali Campus!"
        }
      />
    </>
  );
};

export default page;
