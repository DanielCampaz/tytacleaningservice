import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import { Footer, HeaderCus } from "@/libs/components";

export const metadata: Metadata = {
  title: "Tyta Service",
  description: "Tyta Cleaning Service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/tytaLogo-white.ico" type="image/ico" />
      </head>
      <body>
        <main>
          <HeaderCus />
          <div className="container mx-auto px-4 mt-10">{children}</div>
          <div className="mb-15">
            <Footer />
          </div>
          <Toaster />
        </main>
      </body>
    </html>
  );
}
