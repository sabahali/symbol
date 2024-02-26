import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const config = {
    providers: [Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      })],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true
          },
          async redirect({ url, baseUrl }) {
            return baseUrl;
          },
          async session({ session, user, token }) {
            return session
          },
          async jwt({ token, user, account, profile, isNewUser }) {
            return token
          }
    },
    secret:process.env.NEXTAUTH_SECRET,
    basePath: "/api/auth",
    trustHost:true

  } satisfies NextAuthConfig;

  export const { handlers :{GET,POST}, auth, signIn, signOut } = NextAuth(config);