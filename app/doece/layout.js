import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import { menuItems } from "@/utils/departmentMenuItems";
import Head from "next/head";

export const metadata = {
  title: "Department of Electronics and Computer Engineering",
  description: "DOECE ",
};

export default function root({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <HeaderComponent menuItems={menuItems} />
      {children}
    </>
  );
}
