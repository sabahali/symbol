import { authConfig } from "./auth.config"
import { NextResponse } from "next/server";
import NextAuth from "next-auth"
export const { auth } = NextAuth(authConfig);
const publicRoutes = [
    "/",
];
const authRoutes = ['/dashboard/students']
const apiAuthPrefix = "/api/auth";
export default auth(async (req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)
    if (isApiAuthRoute) {
        return
    }

    if (!isPublicRoute && !isLoggedIn) {
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
    if(isAuthRoute && req.auth?.role !== 'teacher' ){

        return Response.redirect(new URL(
            `/dashboard`,
            nextUrl
        )); 
    }
    // req.headers.set('x-pathname',nextUrl.pathname)
    // console.log(req.headers.get('x-pathname'))
    // const requestHeaders = new Headers(req.headers);
    // requestHeaders.set('x-pathname', nextUrl.pathname);
  
    // return NextResponse.next({
    //   request: {
    //     // Apply new request headers
    //     headers: requestHeaders,
    //   }
    // });
})
export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}