import type { Metadata } from "next";
import "@/style/globals.css";
import Header from "@/components/app/Header";
import Footer from "@/components/app/Footer";

import { cn } from "@/lib/utils";

import { ViewTransitions } from "next-view-transitions";

import { ThemeProvider } from "next-themes";
import AnimatedLayout from "@/components/app/AnimatedLayout";

export const metadata: Metadata = {
  title: "我的博客",
  description: "欢迎来到我的博客",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="zh" suppressHydrationWarning className="h-full">
        <head>
          <link rel="icon" href="/next.svg" type="image/svg+xml" />
        </head>
        <body className={cn(`flex flex-col bg-background antialiased h-full`)}>
          <ThemeProvider attribute="class">
            <Header />
            <AnimatedLayout>{children}</AnimatedLayout>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
