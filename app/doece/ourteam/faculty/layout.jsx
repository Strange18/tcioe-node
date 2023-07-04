import { Inter } from "next/font/google";
import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import { menuItems } from "@/utils/departmentMenuItems";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Faculty Members",
  description:
    "Full time faculty members of department of electronics and computer engineering ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <HeaderComponent menuItems={menuItems} />
        <main>{children}</main>
      </body>
    </html>
  );
}
