import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tip Calculator",
  description: "Frontend Mentor Tip Calculator App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
            