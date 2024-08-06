"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/header.jsx";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body className={inter.className} style={{ marginTop: 100 }}>
        {children}
      </body>
    </html>
  );
}
