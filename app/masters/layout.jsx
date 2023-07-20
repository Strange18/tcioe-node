import { Inter } from "next/font/google";
import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import { menuItems } from "@/utils/menuItems";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Master Degree Programs",
  description:
    "Description of Master Degree Programs available at Thapathali Campus IOE",
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
