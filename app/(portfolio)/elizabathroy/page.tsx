import React from 'react'
import Navbar from "@/components/navbar";
import Hero from './hero';
export default function page() {
    const navLinks = [
        {
            text: "Home",
            link: "/"
        },

    ]
    return (
        <div className='md:overflow-y-hidden'>
            <div className='lg:px-2'>
                <Navbar navLinks={navLinks} />
            </div>
            <Hero/>
        </div>
    )
}
