import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AirBnB Clone",
  description: "A clone of AirBnB using Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} text-sm antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
