"use server"
import {auth} from '@/auth'

export async function getAuthUser(){
    const session = await auth()
    return session?.user
}
export async function getAuthRole(){
    const session = await auth()
    return session?.role
}
