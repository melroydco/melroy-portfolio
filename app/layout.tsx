import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Melroy D'Costa | AI & Data Science Portfolio",
  description: "Portfolio of Melroy D'Costa — AI, Machine Learning, Data Science and Generative AI projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
