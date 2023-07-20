import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import { menuItems } from "@/utils/menuItems";

export const metadata = {
  title: "My Portal",
  description: "My Portal",
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
