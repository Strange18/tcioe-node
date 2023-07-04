import img1 from "@/assets/img.jpg";
import { RenderTeamCards } from "@/components/RenderTeamCards";

async function getData() {
  const res = await fetch(
    "https://backend.omprakashsharma.com.np/api/department/staff-members/",
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  return <RenderTeamCards Members={data} title="Faculty" />;
}
