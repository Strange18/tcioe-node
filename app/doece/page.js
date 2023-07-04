"use client"
import React from 'react'
import HeroComponent from "@/components/HeroComponent";
import CampusChiefComponent from "@/components/CampusChiefComponent";
import ProgramsOfferedComponent from "@/components/ProgramsOfferedComponent";

//paxi backend bata head_data fetch garera pathaune
import hero from "@/assets/heroDOECE.png";
import CampusCheifimage from '@/assets/CC_image.png'
import computer from "@/assets/computer.png";
import electronics from "@/assets/electronics.png";
import CampusImageGallery from '@/components/CampusImageGallery';
import StudentTestimonials from '@/components/StudentTestimonials';

const head_data ={
    post:"Department Head",
    name:"Kiran Chandra Dahal",
    message:" Welcome to our campus! As the Campus Head, I am delighted to have you join our vibrant community. Our campus is a place where students are encouraged to explore their passions, expand their horizons, and create lasting memories. We strive to provide a nurturing and inclusive environment that fosters academic excellence, personal growth, and holistic development. With state-of-the-art facilities, dedicated faculty members, and a wide range of co-curricular activities, we aim to empower our students to become future leaders and make a positive impact in their chosen fields.",
    photo:CampusCheifimage,
  }
const programs_data = [
    {
        id:1,
        name:"Bachelor of Computer Engineering",
        description:`In the program, 52 core and elective courses are offered in eight semesters. Experienced and qualified faculties are involved in the program Besides the course, the department aims at updating the knowledge of the students with the latest development in the fields of Information Technology and Computer Engineering through special lectures from experts and reputed scholars.
         Department follows the course prepared by the Institute of Engineering for this program Academic quality and other matters of the program are controlled and guided by the university. TU awards the certificates to the successful students at the end of the program.`,
        image : computer,
    },
    {
        id:2,
        name:"Bachelor of Electronics and Communication Engineering",
        description:`This is a four-year bachelor program. In this program, 50 core and elective courses are offered in eight semesters. The course comprises of lecture, laboratory exercises and site-visits. Experienced and qualified faculties provide the students with theoretical as well practical knowledge. Besides the course, the Department aims at updating the knowledge of the students with the latest development in the fields of Information Communication Technology and Electronics through special lectures from experts and reputed scholars.
        The Department follows the courses prepared by the Institute of Engineering. Academic quality and other matters of the program are controlled and guided by the university. TU awards the certificates to the students after completing the program successfully.`,
        image : electronics,
    },
]

const Page = () => {
  return (
    <>
      <div>
          <HeroComponent img={hero} />
          <CampusChiefComponent post={head_data.post} name={head_data.name} photo={head_data.photo} message={head_data.message} />
          <ProgramsOfferedComponent programs={programs_data} />
          <CampusImageGallery />
          <StudentTestimonials />
      </div>
    </>
  )
}

export default Page