import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/ui/theme-provider";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://yoni-deserbaix-potfolio.vercel.app/"),

  title: "Yoni Deserbaix - Développeur Frontend React & Next.js",
  authors: {
    name: "Yoni Deserbaix",
  },
  description:
    "Basé à Nantes, je suis développeur Frontend React et Next.js passionné par la construction d'interfaces utilisateurs et d'applications web modernes que les utilisateurs adorent.",
  icons: {
    icon: ["/assets/memoji-favicon.png"],
  },

  openGraph: {
    title: "Yoni Deserbaix - Développeur Frontend React & Next.js",
    description:
      "Basé à Nantes, je suis développeur Frontend React et Next.js passionné par la construction d'interfaces utilisateurs et d'applications web modernes que les utilisateurs adorent.",
    url: "https://yoni-deserbaix-potfolio.vercel.app/",
    siteName: "Yoni Deserbaix",
    images: "/assets/projects/project01.png",
    type: "website",
  },
  keywords: [
    "Portfolio",
    "Yoni Deserbaix",
    "Développeur Frontend",
    "JavaScript",
    "TypeScript",
  ],
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
