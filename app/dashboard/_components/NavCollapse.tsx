"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { NavbarCollapse } from 'flowbite-react'
const linktheme = {
    base: "block py-2 pr-4 pl-3 md:p-0",
    active: {
        on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
        off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
    }
}
interface props{
    role:string
}
export default function NavCollapse({role}:props) {
    const pathname = usePathname()
  return (
    <NavbarCollapse>
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
    </NavbarCollapse>
  )
}
