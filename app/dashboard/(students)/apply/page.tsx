"use client"
import React, { useEffect, useState } from 'react'
import ApplyForm from '../../_components/ApplyForm'
import { useSession } from 'next-auth/react'
function Apply() {
     const { data: session, status,update } = useSession()
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
  
    useEffect(()=>{
        if(session?.applied === true){
            setSuccess(true)
        }
        
    },[session])
      // if (status === "loading") {
    //     return <p>Loading...</p>
    //   }
    
    //   if (status === "unauthenticated") {
    //     return <p>Access Denied</p>
    //   }
 
    return (
        <div className='h-full w-full flex flex-wrap justify-center items-center'>
            {success == false ?
                < ApplyForm setSuccess={setSuccess} setError={setError} update={update} session = {session}/>
            :error ? 
            <h1 className='text-xl p-2 text-center md:text-4xl text-rose-700'> Please Try Again</h1>
            : <div className='w-full h-[90vh] space-y-5 flex flex-wrap flex-col gap-6 justify-center items-center'>
            <h1 className='text-xl p-2 text-center md:text-4xl '> You have applied to Symbol Academy Successfully </h1>
            <h1 className='text-md p-2 text-center md:text-xl'> We will contact you sooon !</h1>
        </div>}
        </div>
    )
}

export default Apply