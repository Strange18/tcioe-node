import HeaderComponent from "@/components/HeaderComponent"
import Head from 'next/head';
import "./globals.css"
import FooterComponent from "@/components/FooterComponent"
import StyledComponentsRegistry from "@/components/Registry"

export const metadata = {
  title: 'Thapathali Campus',
  description: 'TCIOE',
}

function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <StyledComponentsRegistry>
          <main>{children}</main>
          <FooterComponent />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout;