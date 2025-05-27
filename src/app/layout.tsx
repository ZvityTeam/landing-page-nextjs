import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ClientBody from "./ClientBody";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "TurinIQ – AI Messaging Platform for Modern Businesses",
  description:
    "TurinIQ is an AI-powered messaging platform that automates customer engagement across WhatsApp, Instagram, Messenger, LinkedIn, Gmail, and more. Empower your business with smart, multi-platform conversations, lead generation, and seamless integrations.",
  icons: "https://framerusercontent.com/images/XWvK2ADcLvT8410ax6gDekOnVpA.svg",
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
