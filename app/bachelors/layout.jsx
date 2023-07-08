import { Inter } from "next/font/google";
import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import { menuItems } from "@/utils/menuItems";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bachelor Degree Programs",
  description:
    "Description of Bachelor Degree Programs available at Thapathali Campus IOE",
};
export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <HeaderComponent menuItems={menuItems} />
        <main>{children}</main>
      </body>
    </>
  );
}
