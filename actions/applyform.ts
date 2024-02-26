"use server"
import { auth } from "@/auth"
import formModel from "@/mongoose/applyShema"
import userModel from "@/mongoose/userSchema"
import dbConnect from "@/mongoose/mongodb"

export default async function applyform(formData:any) {
    const rawFormData = {
        ...formData,
      }
      console.log(rawFormData)

    try{
        await dbConnect()
        await formModel.create(rawFormData)
        await userModel.updateOne({applied :true})

        return {success:true}
        //after this update session data.applied = true
        }catch(err){
        throw err
    }
}
