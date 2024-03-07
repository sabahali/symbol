import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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

  return (
    <html lang="en" suppressHydrationWarning={true} >
      <body suppressHydrationWarning={true} className={`${inter.className} w-full h-full bg-gradient-to-r from-indigo-100 to-indigo-200 dark:from-zinc-700 dark:to-zinc-800 `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <div className="ocean overflow-x-clip top-[25vh]">
          <div className="wave"></div>
          </div> */}
          {children}


        </ThemeProvider></body>
    </html >
  );
}
