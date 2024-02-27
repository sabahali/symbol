 import {authConfig} from "./auth.config"
 import NextAuth from "next-auth"
 import { signIn } from "@/auth";
//  export const { auth: middleware } = NextAuth(authConfig)
import { login } from "./actions/login";
export const { auth } = NextAuth(authConfig);
const publicRoutes = [
    "/",
];
const authRoutes = ['/dashboard/students']
const apiAuthPrefix = "/api/auth";
 export default auth(async (req) => {
 
    // const DEFAULT_LOGIN_REDIRECT = "/dashboard";
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    // console.log(isLoggedIn)
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)
    if(isApiAuthRoute){
        return 
    }

    if (!isPublicRoute && !isLoggedIn ) {
        // let callbackUrl = nextUrl.pathname;
        // if (nextUrl.search) {
        //     callbackUrl += nextUrl.search;
        // }
        // const encodedCallbackUrl = encodeURIComponent(callbackUrl);
        return Response.redirect(new URL(
            `/`,
            nextUrl
        ));
    }
    // if(isAuthRoute && req.auth?.role !== 'teacher' ){
    //     return Response.redirect(new URL(
    //         `/`,
    //         nextUrl
    //     )); 
    // }

 })
 export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  }