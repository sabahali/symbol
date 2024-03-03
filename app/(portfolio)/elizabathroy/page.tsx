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
        <div className='max-h-screen md:overflow-y-hidden'>
            <div className='lg:px-2'>
                <Navbar navLinks={navLinks} transition={false} />
            </div>
            <Hero/>
        </div>
    )
}
