import HeaderComponent from "@/components/HeaderComponent"
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
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
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