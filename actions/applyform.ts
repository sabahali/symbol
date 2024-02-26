"use server"
import { auth } from "@/auth"
import formModel from "@/mongoose/applyShema"
import userModel from "@/mongoose/userSchema"
import dbConnect from "@/mongoose/mongodb"

export default async function applyform(formData:FormData) {
    const session = await auth()
    const email = session?.user?.email
    const rawFormData = {
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        address: formData.get('address'),
        email
      }
      console.log(rawFormData)

    try{
        await dbConnect()
        await formModel.create(rawFormData)
        await userModel.updateOne({applied :true})

        return {success:true}
        //after this update session data.applied = true
        }catch(err){
        console.log(err)
    }
}
