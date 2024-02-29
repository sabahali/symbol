import Collapse from './NavCollapse';
import { getAuthRole,getAuthUser } from '@/hooks/getAuth';
import {
    Avatar,
    Dropdown,
    DropdownHeader,
    Navbar,
    NavbarBrand,
    NavbarToggle,
  } from 'flowbite-react';
  import NavSignout from './NavSignout';
export default async function serverNav (){
    const user = await getAuthUser()
    const role = await getAuthRole() as string

    return (
        <Navbar fluid rounded>
          <NavbarToggle />
          <NavbarBrand>
            {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Symbol Academy</span>
          </NavbarBrand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img={user?.image ?? 'S'} rounded />
              }
            >
              <DropdownHeader>
                <span className="block text-sm">{user?.name}</span>
                <span className="block truncate text-sm font-medium">{user?.email}</span>
              </DropdownHeader>
              <NavSignout/>
            </Dropdown>
            
          </div>
            <Collapse role={role} />
        </Navbar>
      );
}