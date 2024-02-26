"use server"
import formModel from "@/mongoose/applyShema"
export default async function getStudents () {
    try{
        const resp = await formModel.find()
        return resp
    }catch(err){
        throw new Error()
    }
}