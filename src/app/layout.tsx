import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ui/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://yoni-deserbaix-potfolio.vercel.app/"),

  title: "Yoni Deserbaix - Développeur Frontend",
  authors: {
    name: "Yoni Deserbaix",
  },

  description:
    "Basé à Nantes, je suis un développeur Frontend passionné par la construction d'applications web modernes que les utilisateurs adorent.",
  openGraph: {
    title: "Yoni Deserbaix - Développeur Frontend",
    description:
      "Basé à Nantes, je suis un développeur Frontend passionné par la construction d'applications web modernes que les utilisateurs adorent.",
    url: "https://yoni-deserbaix-potfolio.vercel.app/",
    siteName: "Yoni Deserbaix",
    images: "/assets/projects/project01.png",
    type: "website",
  },
  keywords: ["Portfolio", "Yoni Deserbaix", "Développeur Frontend"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
