"use client";
import { signOut } from "next-auth/react";
import { DropdownItem } from "flowbite-react";
export default function navSignout() {
  return (
    <DropdownItem onClick={() => signOut({ redirect: true, callbackUrl: '/' })}>Sign Out</DropdownItem>
    // <span ></span>
  )
}
