// import { RenderTeamCards } from "@/components/RenderTeamCards";

// const fetchData = async (designation) => {
//   const res = await fetch(
//     `https://notices.tcioe.edu.np/api/department/staffs/search?designation=${designation}`,
//     { cache: "no-store" }
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// };

export default async function Home() {
  // const [
  //   campuschief,
  //   assistantcampuschief,
  //   masterscoordinator,
  //   headofdepartment,
  //   dhod,
  //   helpingstaff,
  // ] = await Promise.all([
  //   fetchData("Campus Chief"),
  //   fetchData("Assistant Campus Chief"),
  //   fetchData("Msc. Coordinator"),
  //   fetchData("Head of Department"),
  //   fetchData("Deputy Head of Department"),
  //   fetchData("Helping Staff"),
  // ]);
  return (
    <>
      {/* <RenderTeamCards Members={campuschief} title="Campus Officials" />
      <RenderTeamCards Members={assistantcampuschief} title="" />
      <RenderTeamCards Members={masterscoordinator} title="" />
      <RenderTeamCards Members={headofdepartment} title="" />
      <RenderTeamCards Members={dhod} title="" />
      <RenderTeamCards Members={helpingstaff} title="" /> */}
      On Progess
    </>
  );
}
