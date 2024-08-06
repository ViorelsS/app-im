import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App IM",
  description: "Created by @Viorelss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <Header />
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow max-h-screen overflow-auto">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
