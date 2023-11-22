import UnionComponent from "@/components/CampusLife/UnionComponent";

export default function Page() {
  const unionMembers = [
    { name: "Pushkar Bikram Shahi", position: "President" },
    { name: "Shrawan Ojha", position: "Vice President" },
    { name: "Raj Kumar Dhakal", position: "Secretary" },
    { name: "Milan Chaulagain", position: "Joint Secretary" },
    { name: "Mahesh Banjade", position: "Treasurer" },
    { name: "Ambika Joshi", position: "Member" },
    { name: "Prahlad Khadka", position: "Member" },
    { name: "Prerana Bhandari", position: "Member" },
    { name: "Om Prakash Negi", position: "Member" },
    { name: "Rupak Pokhrel", position: "Member" },
    { name: "Rajiv Adhikari", position: "Member" },
    { name: "Arun Babu Mahto", position: "Member" },
    { name: "Anjana Pokhrel", position: "Member" },
    { name: "Navin Gautam", position: "Member" },
    { name: "Hukum Rawal", position: "Member" },
    { name: "Shishir Sapkota", position: "Member" },
    { name: "Pragati Khanal", position: "Member" },
    { name: "Gokarn Kuwar", position: "Member" },
    { name: "Anish Sakha", position: "Member" },
  ];

  const title = "Free Student Union";

  const description = `The Free Student Union election at Thapathali Campus is a vital process where all students can vote for their chosen representatives. The elected committee advocates for students' rights, professional growth, and other important issues. Candidates are carefully nominated, and elections are conducted through secret ballots to ensure transparency. The committee collaborates with campus management to enhance the overall campus environment, making it a hub of student empowerment and active democracy.`;
  const tabletitle = `Free Student Union Executives, Thapathali Campus Unit`;
  return (
    <UnionComponent
      title={title}
      description={description}
      members={unionMembers}
      tabletitle={tabletitle}
    />
  );
}
