import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import { menuItems } from "@/utils/departmentMenuitems_doas";

export const metadata = {
  title: "Department of Applied Science",
  description: "DOAS ",
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
