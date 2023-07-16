import img1 from "@/assets/logo.png";
import { RenderTeamCards } from "@/components/RenderTeamCards";

export default function Home() {
  const StaffMembers = [
    {
      id: 1,
      Name: "Mr. Nabin Lamichhane",
      staff_designation: "Technical Assistant",
      Responsibility: null,
      image: img1,
    },
    {
      id: 2,
      Name: "Ms. Kabira Khadka",
      staff_designation: "Lab Technician Electronics",
      Responsibility: null,
      image: img1,
    },
    {
      id: 3,
      Name: "Mr. Tika Ram Maharjan",
      staff_designation: "Office Helper",
      Responsibility: null,
      image: img1,
    },
    {
      id: 4,
      Name: "Mr. Minod Pode",
      staff_designation: "Office Helper",
      Responsibility: null,
      image: img1,
    },
  ];
  return <RenderTeamCards Members={StaffMembers} title="Staff" />;
}
