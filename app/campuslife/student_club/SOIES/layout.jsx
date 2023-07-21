import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import { menuItems } from "@/utils/menuItems";
import Head from "next/head";

export const metadata = {
  title: "Campus Life",
  description: "Life at thapathali campus beyond academics",
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
