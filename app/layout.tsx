import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIxDesigner - Join the Waitlist",
  description: "The AI-powered design companion that transforms your creative vision into reality. Join thousands of designers revolutionizing their workflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
