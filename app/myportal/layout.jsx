import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import { menuItems } from "@/utils/menuItems";
import Head from "next/head";
import SubNavBar from "@/components/SubNavBar";

export const metadata = {
  title: "My Portal",
  description: "Student Portal",
};

export default function root({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <SubNavBar />
      <HeaderComponent menuItems={menuItems} />
      {children}
    </>
  );
}
