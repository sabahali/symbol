"use server"
import { signIn } from "@/auth";
export const login = async () =>{
    console.log('login clicked')
    try{
        await signIn('google',{redirectTo:'/dashboard'})
    }catch(err){
        throw err
    }
}