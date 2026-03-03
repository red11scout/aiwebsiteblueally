import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { DrawerProvider } from "@/hooks/useDrawer";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCtaBanner } from "@/components/layout/StickyCtaBanner";
import { DrawerForm } from "@/components/conversion/DrawerForm";
import { ExitIntentOverlay } from "@/components/conversion/ExitIntentOverlay";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://explore.gofasterwithai.com"
  ),
  title: {
    default: "Go Faster with AI | BlueAlly",
    template: "%s | BlueAlly AI Assessment",
  },
  description:
    "BlueAlly maps your industry friction to validated AI use cases with quantified ROI. Free customized assessment.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "BlueAlly AI Assessment",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans">
        <DrawerProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <StickyCtaBanner />
          <DrawerForm />
          <ExitIntentOverlay />
        </DrawerProvider>
      </body>
    </html>
  );
}
