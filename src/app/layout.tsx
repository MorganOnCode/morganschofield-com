import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
// import { Navigation } from "@/components/navigation";
import { AnimatedMenu } from "@/components/animated-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Morgan Schofield",
  description: "Personal website of Morgan Schofield",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedMenu />
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
