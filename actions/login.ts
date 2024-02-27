"use server"
import { signIn } from "@/auth";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
export const login = async (callbackurl: String) => {
    const session = await auth()
    if (session?.user) {
        return redirect(`${callbackurl}`)
    } else {
        try {
            await signIn('google', { redirectTo: callbackurl ? `${callbackurl}` : '/dashboard' })
        } catch (err) {
            throw err
        }

    }


}