import { RenderTeamCards } from "@/components/RenderTeamCards";
import cc from "@/assets/arch-hero.jpg";
// async function getData() {
//   const res = await fetch(
//     "https://notice.tcioe.edu.np/api/department/staff-members/",
//     { cache: "no-store" }
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

const data = [
  // {
  //   id: 1,
  //   name: "khem",
  //   responsibility: "Campus Chief",
  //   Image: cc,
  //   designation: "Asst. Professor",
  //   keyOfficial: true,
  // },
  // {
  //   id: 2,
  //   name: "khem",
  //   responsibility: "Campus Chief",
  //   Image: cc,
  //   designation: "Asst. Professor",
  //   keyOfficials: false,
  // },
  // {
  //   id: 3,
  //   name: "khem",
  //   responsibility: "Campus Chief",
  //   Image: cc,
  //   designation: "Asst. Professor",
  //   keyOfficials: false,
  // },
  // {
  //   id: 4,
  //   name: "khem",
  //   responsibility: "Campus Chief",
  //   Image: cc,
  //   designation: "Asst. Professor",
  //   keyOfficials: true,
  // },
];
export default async function Home() {
  // const data = await getData();
  const campuschief = data.slice(0, 1);
  const remdata = data.slice(1);
  return (
    <>
      <RenderTeamCards Members={campuschief} title="Campus Officials" />
      <RenderTeamCards Members={remdata} title="" />
    </>
  );
}
