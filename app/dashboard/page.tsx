"use client"
import 'flowbite';
// import { login } from '@/actions/login';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
export default function DashBoard() {
  const { data: session, status } = useSession()
  useEffect(() => {
    console.log(session)
  }, [session])

  return (
    <>
      <div className='w-full h-[90vh] flex-col items-center gap-5'>
        <div className='w-full h-full flex justify-center items-center '>
          <h1 className='mt-10 text-xl p-2 text-center md:text-4xl'>Welcome to Symbol Academy</h1>
        </div>
      </div>
    </>
  )
}
