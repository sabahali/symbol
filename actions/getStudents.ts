"use server"
import formModel from "@/mongoose/applyShema"
import dbConnect from "@/mongoose/mongodb"
export default async function getStudents () {
    try{
        await dbConnect()
        const resp = await formModel.find()
        return resp
    }catch(err){
        return null
    }
}