import HeaderComponent from "@/components/HeaderComponent";

export const metadata = {
  title: "Annual Report",
  description: "Annual Report",
};

export default function RootLayout({ children }) {
  return (
    <>
      {/* <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body> */}
        <main>{children}</main>
      {/* </body> */}
    </>
  );
}
