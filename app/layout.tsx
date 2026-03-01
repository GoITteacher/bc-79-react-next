import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AppHeader from "@/components/AppHeader/AppHeader";
import TanStackProvider from "@/components/providers/TanStackProvider";
import "./globals.css";
import styles from "./layout.module.css";
import AuthProvider from "@/components/providers/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["900"],
});

export const metadata: Metadata = {
  title: "Pulse workspace",
  description: "Light, minimal workspace preview for news, tasks, and notes.",
  openGraph: {
    title: "Pulse workspace",
    description: "Light, minimal workspace preview for news, tasks, and notes.",
    url: "https://pulse.demo",
    siteName: "Pulse workspace",
    images: [
      {
        url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
        width: 1200,
        height: 630,
        alt: "Workspace preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${styles.body}`}
      >
        <TanStackProvider>
          <AuthProvider>
            <AppHeader />
            <div>TEST</div>
            <div className={styles.pageFrame}>{children}</div>
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
