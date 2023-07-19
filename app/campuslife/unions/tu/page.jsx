import UnionComponent from "@/components/CampusLife/UnionComponent";

export default function Page() {
  const unionMembers = [
    { name: "Dr. Shree Hari Thapa", position: "President" },
    { name: "Mr. Kiran Lal Maharjan", position: "Vice President" },
    { name: "Mr. Bishworam Parajuli", position: "Secretary" },
    { name: "Mr. Ganesh Kumal", position: "Joint Secretary" },
    { name: "Mr. Debendra Bahadur Raut", position: "Treasurer" },
    { name: "Mr. Chinikaji Maharjan", position: "Member" },
    { name: "Mr. Gautam Das Tuladhar", position: "Member" },
    { name: "Mr. Kalyan Poudel", position: "Member" },
    { name: "Mrs. Sabita Bashyal", position: "Member" },
    { name: "Mrs. Shova Thapa", position: "Member" },
    { name: "Mr. Umesh Kanta Ghimire", position: "Member" },
  ];

  const title = "Teacher's Union";

  const description = `The teacher union election at Thapathali Campus is an important process where all the faculty members have 
            the opportunity to vote for their preferred candidates. The elected committee represents the faculties and 
            advocates for their rights, professional development, and other important issues. The candidates are typically 
            nominated through a nomination process, and then the election is held via a secret ballot. The elected committee 
            is responsible for addressing the concerns and needs of the faculty members and working with the management to 
            improve the academic environment and promote professional development.`;
  const tabletitle = `Teachers' Union Executives, Thapathali Campus Unit`;
  return (
    <UnionComponent
      title={title}
      description={description}
      members={unionMembers}
      tabletitle={tabletitle}
    />
  );
}
