import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Symbol Acadamedy",
  description: "Reseach Courses",
  icons: ['favicon.ico']
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning={true} >
      <body suppressHydrationWarning={true} className={`${inter.className} w-full h-full dark:bg-zinc-800 bg-indigo-100`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >


          <SessionProvider session={session} >

            {children}
          </SessionProvider>


        </ThemeProvider></body>
    </html>
  );
}
