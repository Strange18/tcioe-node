import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import { menuItems } from "@/utils/departmentMenuItems";
import Head from "next/head";

export const metadata = {
  title: "DOECE: Staff members",
  description:
    "Full time staff members of the department of electroncis and computer engineering",
};

export default function root({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      {children}
    </>
  );
}
