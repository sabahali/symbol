"use server"
import formModel from "@/mongoose/applyShema"
import userModel from "@/mongoose/userSchema"
import dbConnect from "@/mongoose/mongodb"
import gmailForm from "./gmailForm"

export default async function applyform(formData:applyFormType) {
    const rawFormData = {
        ...formData,
      }
    try{
        await dbConnect()
        await formModel.create(rawFormData)
        await userModel.updateOne({email:formData.email},{applied:true})
        return {success:true}
        //after this update session data.applied = true
        }catch(err){
        throw err
    }
}
