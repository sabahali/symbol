import dbConnect from "@/mongoose/mongodb";
import userModel from "@/mongoose/userSchema";
export default async function getUser(email:String) {
    try{
        await dbConnect();
        const resp = await userModel.findOne({email})
        return resp
    }catch(err){
        throw err
    }
}