import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ayisha Rahna K P",
    description: "Academic Director- Psychology | Researcher | Psychology Teacher at UAE",
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
