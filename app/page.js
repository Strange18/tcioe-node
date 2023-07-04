"use client"
import AboutThapathaliComponent from "@/components/AboutThapathaliComponent";
import CampusChiefComponent from "@/components/CampusChiefComponent";
import CampusImageGallery from "@/components/CampusImageGallery";
import HeroComponent from "@/components/HeroComponent";
import OurDepartmentsSection from "@/components/OurDepartmentsSection";
import StudentTestimonials from "@/components/StudentTestimonials";

//paxi backend bata data fetch garera pathaune
import hero from "@/assets/Hero.png";
import CampusCheifimage from '../assets/CC_image.png'
import HeaderComponent from "@/components/HeaderComponent";
import { menuItems } from "@/utils/menuItems";
import FooterComponent from "@/components/FooterComponent";

const data = {
  post: "Campus chief",
  name: "Dr. Prof. Khem Gyawali",
  message: " Welcome to our campus! As the Campus Head, I am delighted to have you join our vibrant community. Our campus is a place where students are encouraged to explore their passions, expand their horizons, and create lasting memories. We strive to provide a nurturing and inclusive environment that fosters academic excellence, personal growth, and holistic development. With state-of-the-art facilities, dedicated faculty members, and a wide range of co-curricular activities, we aim to empower our students to become future leaders and make a positive impact in their chosen fields.",
  photo: CampusCheifimage,
}

export default function Home() {
  return (
    <>
      <HeaderComponent menuItems={menuItems}/>
      <div>
        <HeroComponent img={hero} />
        <CampusChiefComponent post={data.post} name={data.name} photo={data.photo} message={data.message} />
        <AboutThapathaliComponent />
        <OurDepartmentsSection />
        <CampusImageGallery />
        <StudentTestimonials />
      </div>
    </>
  )
}
