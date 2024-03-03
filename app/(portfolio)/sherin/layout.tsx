import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sherin P",
    description: "Dedicated consultant psychologist currently immersed in full-time Ph.D.",
    icons: ['favicon.ico']
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            { children }
        </main>
        
    );
}
