import AppHeader from "@/components/AppHeader/AppHeader";

import "./globals.css";
import styles from "./layout.module.css";
import TanStackProvider from "@/components/TanStackProvider";
import { Roboto, Montserrat } from "next/font/google";
import clsx from "clsx";

const robotoFont = Roboto({
  weight: ["400", "500", "800", "900"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
  display: "swap",
});

const monserratFont = Montserrat({
  weight: ["400", "500", "800", "900"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-monserrat",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(robotoFont.variable, monserratFont.variable)}>
        <TanStackProvider>
          <div className={styles.shell}>
            <AppHeader />
            <main className={styles.content}>{children}</main>
          </div>
        </TanStackProvider>
      </body>
    </html>
  );
}
