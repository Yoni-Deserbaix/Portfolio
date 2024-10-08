import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/ui/theme-provider";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://yoni-deserbaix-portfolio.vercel.app"),

  title: "Yoni Deserbaix - Développeur Frontend React & Next.js",
  authors: [
    {
      name: "Yoni Deserbaix",
      url: "https://yoni-deserbaix-portfolio.vercel.app",
    },
    {
      name: "y2_dev",
      url: "https://yoni-deserbaix-portfolio.vercel.app",
    },
  ],
  description:
    "Basé à Nantes, je suis développeur Frontend React et Next.js passionné par la construction d'interfaces utilisateurs et d'applications web modernes que les utilisateurs adorent.",
  icons: {
    icon: ["/assets/favicon-danny-phantom.png"],
  },

  openGraph: {
    title: "Yoni Deserbaix - Développeur Frontend React & Next.js",
    description:
      "Basé à Nantes, je suis développeur Frontend React et Next.js passionné par la construction d'interfaces utilisateurs et d'applications web modernes que les utilisateurs adorent.",
    url: "https://yoni-deserbaix-portfolio.vercel.app/",
    siteName: "Yoni Deserbaix",
    images: "/assets/metadata.png",
    type: "website",
  },
  keywords: ["Portfolio", "Yoni Deserbaix", "y2_dev", "y2dev", "y2/ui"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
