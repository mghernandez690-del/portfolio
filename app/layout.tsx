import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mg Hernandez Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-white">
        {children}
      </body>
    </html>
  );
}