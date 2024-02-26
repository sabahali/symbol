"use server"
import { signIn } from "@/auth";
export const login = async (callbackurl:String) =>{
    console.log(callbackurl)
    try{
        await signIn('google',{redirectTo:callbackurl ? `${callbackurl}` : '/dashboard' })
    }catch(err){
        throw err
    }
}