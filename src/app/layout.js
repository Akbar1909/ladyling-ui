import { Inter } from "next/font/google";
import "./globals.css";
import Content from "@/components/Layout/Content";
import AllProviders from "@/providers";
import PageWrapper from "@/components/PageWrapper";
import Header from "@/components/Layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ladyling Academy",
  description: "Learn in fun way",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="p:domain_verify"
          content="65d60c9c30f23e2df63a52ad80215baa"
        />
        <script
          data-domain="ladyling.academy"
          src="https://statspro.io/js/broadcaster.js"
          async
        >
          {" "}
        </script>
      </head>
      <body className={inter.className}>
        <AllProviders>
          <Content>
            <PageWrapper>
              <Header />
              {children}
            </PageWrapper>
          </Content>
        </AllProviders>
      </body>
    </html>
  );
}
