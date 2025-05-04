import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Spectra - SaaS Website Template",
  description:
    "Spectra is a modern, light-styled technology template packed with features and details. Easily customized, it's the perfect solution for modern businesses wanting to get online and perform effectively.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientBody>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster position="bottom-right" />
        </ClientBody>
      </body>
    </html>
  );
}
