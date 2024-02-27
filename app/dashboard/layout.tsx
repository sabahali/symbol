
import { ThemeModeScript } from 'flowbite-react';
import DashNav from './_components/navbar';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';
export default async function Layout({ children }: { children: React.ReactNode }) {
    const session = await auth();

    return (
        <>
            <ThemeModeScript />
            <SessionProvider session={session}>
                <DashNav />
                <main>{children}</main>

            </SessionProvider>

        </>
    )

}