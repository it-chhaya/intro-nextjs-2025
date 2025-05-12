import type { Metadata } from "next";
import "./globals.css";
import AppMenu from "@/components/appmenu/AppMenu";

export const metadata: Metadata = {
  title: "My First Next App",
  description: "Blog Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <AppMenu />
        {children}
      </body>
    </html>
  );
}
