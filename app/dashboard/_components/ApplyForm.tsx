'use client';

import { Button,Label, TextInput } from 'flowbite-react';
import applyform from '@/actions/applyform';
import {  useState } from 'react';
import gmailForm from '@/actions/gmailForm';
import { useRouter } from 'next/navigation';
function ApplyForm({ setSuccess, setError,update,session }: any) {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const onSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData(e.target as HTMLFormElement);
        const email = session?.user?.email
        if(!email) throw new Error("Invalid Authentication")
        const rawFormData = {
            firstname: formData.get('firstname'),
            lastname: formData.get('lastname'),
            address: formData.get('address'),
            email
          }
        try {
            const resp = await applyform(rawFormData)
            if (resp?.success == true) {
                setSuccess(true)
                await update({...session,applied:true})
                try{
                await gmailForm(rawFormData)
                }catch(err){
                    console.log(err)
                }             
            } else {
                setError(true)
            }
        } catch (err) {
            setError(true)
        } finally {
            setLoading(false)           
            router.refresh()
        }

    }
    return (
        <>
            <form className="flex flex-col gap-5 items-center justify-center w-[90vw] md:w-1/2 mt-10" onSubmit={onSumbit}>
                <div className='grid grid-cols-1 gap-5 items-center justify-center md:grid-cols-2 w-full '>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="firstName" value="First Name" />
                        </div>
                        <TextInput id="firstName" type="text" name='firstname' placeholder="Your First Name" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="lastName" value="Last Name" />
                        </div>
                        <TextInput id="lastName" type="text" name='lastname' placeholder="Your Last Name" required />
                    </div>
                    <div className='md:col-span-2'>
                        <div className="mb-2 block">
                            <Label htmlFor="address" value="Address" />
                        </div>
                        <TextInput id="address" type="text" name='address' placeholder="Address" required />
                    </div>
                </div>
                <Button type="submit" className='w-full'disabled={loading}>Submit</Button>
            </form>


        </>
    )
}

export default ApplyForm