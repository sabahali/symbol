import type { NextAuthConfig } from 'next-auth';
import getUser from './actions/getUser';
import createUser from './actions/createUser';
import { clientPromise, client } from "./mongoose/mongoclient";
import dbConnect from './mongoose/mongodb';
import userModel from './mongoose/userSchema';
import Google from "next-auth/providers/google";


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
export const authConfig = {
    providers: [Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        profile(profile) {
            return {
             id:profile.sub,
             name:profile.name,
             email:profile.email,
             image:profile.picture,
             applied:false,
             role:'student'
            }
          }
    })],
    secret: process.env.NEXTAUTH_SECRET,
    basePath: "/api/auth",
    trustHost: true,
    session: { strategy: 'jwt' }
    

    // providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;