
import { ThemeModeScript } from 'flowbite-react';
import DashNav from './_components/navbar';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';
export default async function Layout({ children }: { children: React.ReactNode }) {
    const session = await auth();
    return (
        <>
            <ThemeModeScript />
            <DashNav />
            <SessionProvider session={session}>
                <main>{children}</main>

            </SessionProvider>

        </>
    )

}