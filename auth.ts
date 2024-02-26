import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import getUser from "./actions/getUser";
import createUser from "./actions/createUser";
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
    providers: [Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (!profile?.email) {
                return false
            }
            try {
                const existingUser = await getUser(profile?.email)
                if (!existingUser) {
                    // If the user doesn't exist, create a new user
                    // await userModel.create();
                    try {
                        await createUser({
                            email: profile?.email,
                            name: profile?.name ?? '',
                            picture: profile?.picture,
                            role: 'student',
                            applied: false,
                        })
                    } catch (err) {
                        return false
                    }
                }//     console.log('New user created:', profile?.email);
            } catch (err) {
                return false
            }
            return true
        },
        async redirect({ url, baseUrl }) {
            return baseUrl;
        },
        async session({ session, user, token }) {
            session.role = token.role
            session.applied=token.applied
            return session
        },
        async jwt({ token, user, account, profile, trigger, session }) {
            if (trigger === "update" && session) {
                // Note, that `session` can be any arbitrary object, remember to validate it!
                token.applied = true;
            }
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
            return token
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    basePath: "/api/auth",
    trustHost: true,
    session: { strategy: 'jwt' }

} satisfies NextAuthConfig;

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(config);