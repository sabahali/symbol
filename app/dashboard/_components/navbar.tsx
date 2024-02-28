'use client';
import { Avatar, Dropdown, Navbar, NavbarToggle } from 'flowbite-react';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeChanger from '@/components/DarkSwitch';

function DashNav() {
    const session = useSession()
    const user: any = session.data?.user
    const role = session.data?.role
    const pathname = usePathname()
    const linktheme = {
        base: "block py-2 pr-4 pl-3 md:p-0",
        active: {
            on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
            off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
        }
    }
    return (
        <>
            <Navbar fluid rounded>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Brand>
                    {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Symbol Academy</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="Profile" img={user?.image ?? 'S'} rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">{user?.name}</span>
                            <span className="block truncate text-sm font-medium">{user?.email}</span>
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={() => signOut({ redirect: true, callbackUrl: '/' })}>Sign out</Dropdown.Item>
                    </Dropdown>

                </div>
                <Navbar.Collapse>
                    <Link href="/dashboard" className={pathname === '/dashboard' ? linktheme.active.on : linktheme.active.off}>Home</Link>

                    {role === 'student' ?
                        <>
                            <Link href="/dashboard/apply" className={pathname === '/dashboard/apply' ? linktheme.active.on : linktheme.active.off}>Apply</Link>
                            <Link href="/dashboard/contact" className={pathname === '/dashboard/contact' ? linktheme.active.on : linktheme.active.off}>Contact</Link>
                            {/* <Navbar> </Navbar>
                            <Navbar> <Link href="/dashboard/contact">Contact</Link></Navbar> */}
                        </>
                        : role === 'teacher' ?
                            <>
                                <Link href="/dashboard/students" className={pathname === '/dashboard/students' ? linktheme.active.on : linktheme.active.off}>Students</Link>

                            </>
                            : null
                    }
                    <Navbar.Brand>
                        <ThemeChanger />
                    </Navbar.Brand>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default DashNav