import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmad Munab | Web Developer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} w-screen overflow-x-hidden h-max p-0 m-0 box-border bg-black/95 bg-grid `}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
