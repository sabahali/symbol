import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import getUser from "./actions/getUser";
import createUser from "./actions/createUser";
import { authConfig } from './auth.config';
import { clientPromise } from "./mongoose/mongoclient";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import dbConnect from "./mongoose/mongodb";
import userModel from "./mongoose/userSchema";
declare module "@auth/core/types" {
    interface Session {
        role: String,
        applied: Boolean,
        user: DefaultSession["user"] & {
            role: String;
          };
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
    adapter: MongoDBAdapter(clientPromise),
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (!profile?.email) {
                return false
            }
            return true
        },
        async session({ session, user, token }) {
            session.role = token.role
            session.applied = token.applied
            return session
        },
        async jwt({ token, user, account, profile, trigger, session }) {
            if (trigger === "update" && session) {
                // Note, that `session` can be any arbitrary object, remember to validate it!
                token.applied = session?.applied;
            }
            if (user) {
                if (user && user?.email) {
                    try {
                        // const existingUser = await getUser(user?.email)
                        await dbConnect();
                        const existingUser = await userModel.findOne({ email : user?.email })
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
            return url;
        },
    },


} satisfies NextAuthConfig;

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(config);