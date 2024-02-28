
import { ThemeModeScript } from 'flowbite-react';
import DashNav from './_components/navbar';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';
import NavbarServer from './_components/navbarServer';
export default async function Layout({ children }: { children: React.ReactNode }) {
    const session = await auth();

    return (
        <>
            <ThemeModeScript />
            <SessionProvider session={session}>
                <NavbarServer />
                <main>{children}</main>

            </SessionProvider>

        </>
    )

}