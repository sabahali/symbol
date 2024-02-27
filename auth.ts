import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import getUser from "./actions/getUser";
import createUser from "./actions/createUser";
import { authConfig } from './auth.config';
import {clientPromise} from "./mongoose/mongoclient";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import dbConnect from "./mongoose/mongodb";
import userModel from "./mongoose/userSchema";
declare module "@auth/core/types" {
    interface Session {
        role: String,
        applied: Boolean
    }
}
declare module "@auth/core/jwt" {
    interface JWT {
        role: String,
        applied: Boolean
    }
}
const config = {
    ...authConfig,
    adapter:MongoDBAdapter(clientPromise),
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (!profile?.email) {
                return false
            }
            console.log(profile)
            return true
        },
        async session({ session, user, token }) {
            session.role = token.role
            session.applied = token.applied
            return session
        },
        async jwt({ token, user, account, profile, trigger, session }) {
            // if (user) {
                // try{
                //     await dbConnect();
                //     const resp = await userModel.findOne({email:user?.email})
                //     console.log(resp)
                // }catch(err){
                //     throw err
                // }
                // try {
                //     await clientPromise
                //     const database = client.db('symboldb')
                //     const collection = database.collection('users')
                //     const data = await collection.find({}).toArray();
                //     console.log(data)
                // }catch(err){
                //     throw new Error ("database error")
                // }finally{
                //     await client.close();
                // }
            // }
            if (user) {
                if (user && user?.email) {
                    try {
                        const existingUser = await getUser(user?.email)
                        if (existingUser) {
                            token.role = existingUser?.role ?? "student";
                            token.applied = existingUser?.applied ?? false;
                        }
                    } catch (err) {
                        token.role = 'student',
                        token.applied = false
                    }

                }
            }
            return token
        },
        async redirect({ url, baseUrl }) {
            return baseUrl;
        },
    },
   

} satisfies NextAuthConfig;

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(config);