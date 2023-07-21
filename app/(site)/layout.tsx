"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "../components/footer";

config.autoAddCss = false;

export const metadata = {
  title: "Pratik Sahu",
  description: "Portfolio website built using Next.js and Sanity.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuActive, setItMobileMenuActive] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="en">
      <title>{metadata?.title}</title>
      <meta name="description" content={metadata?.description} />
      <body
        className={`min-h-screen dark:bg-black flex flex-col ${
          isMobileMenuActive ? "overflow-y-hidden" : ""
        }`}
      >
        {isMounted ? (
          <ThemeProvider attribute="class">
            <Navbar
              onToggleMobileMenu={(isOpenMobileMenu: boolean) =>
                setItMobileMenuActive(isOpenMobileMenu)
              }
            />
            <main className="flex-grow max-w-6xl px-4 mx-auto my-16 lg:px-6">
              {children}
            </main>
          </ThemeProvider>
        ) : (
          <>
            <Navbar
              onToggleMobileMenu={(isOpenMobileMenu: boolean) =>
                setItMobileMenuActive(isOpenMobileMenu)
              }
            />
            <main className="flex-grow max-w-6xl px-4 mx-auto my-16 lg:px-6">
              {children}
            </main>
          </>
        )}
        <Footer />
      </body>
    </html>
  );
}
