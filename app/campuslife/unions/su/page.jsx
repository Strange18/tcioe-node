import UnionComponent from "@/components/CampusLife/UnionComponent";

export default function Page() {
  const unionMembers = [
    { name: "Mr. Ishwor Karki", position: "President" },
    { name: "Mr. Prakash Pudasaini", position: "Former President" },
    { name: "Mrs. Mridu Gautam", position: "Vice President" },
    { name: "Mr. Nabin Lamichhane", position: "Secretary" },
    { name: "Mr. Tikaram Maharjan", position: "Joint Secretary" },
    { name: "Mr. Rajesh Thapa Magar", position: "Treasurer" },
    { name: "Mr. Prabin Rajbhandari", position: "Member" },
    { name: "Mr. Darjan Shakya", position: "Member" },
    { name: "Mr. Gyanbajra Maharjan", position: "Member" },
    { name: "Mr. Pradip Giri", position: "Member" },
    { name: "Mrs. Bindu Pode", position: "Member" },
    { name: "Mr. Sajit Dhaula", position: "Member" },
  ];

  const title = "Staff's Union";

  const description = `The staff election in Thapathali Campus is a democratic process where all staff members
  have the opportunity to vote for their preferred candidates. The elected committee will represent
  the staff and advocate for their rights, training, development, and other important values to them.
  The elected committee is responsible for addressing the concerns and needs of the staff and
  working with the management to improve the work environment and promote the professional
  development of the staff. They are expected to uphold the values and principles of the institution
  and strive to create a positive and productive work culture`;

  const tabletitle = `Staff's Union Executives, Thapathali Campus Unit`;
  return (
    <UnionComponent
      title={title}
      description={description}
      members={unionMembers}
      tabletitle={tabletitle}
    />
  );
}
