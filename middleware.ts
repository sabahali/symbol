 import {authConfig} from "./auth.config"
 import NextAuth from "next-auth"
//  export const { auth: middleware } = NextAuth(authConfig)
const { auth } = NextAuth(authConfig);

 export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    console.log(isLoggedIn)

 })
 export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  }