import NextAuth from "next-auth"
import GoogleProvider from "@auth/core/providers/google"
import userModel from '@/mongoose/userSchema'
import dbConnect from "@/mongoose/mongodb";
// import { redirect } from "next/navigation";
declare module "@auth/core/types" {
  interface Session {
    role: String
  }
}
declare module "@auth/core/jwt" {
  interface JWT {
    role: String
  }
}
// declare module 'next-auth'{
//   interface Session{
//     user :{
//       role: String
//     } & DefaultSession ["user"]
//   }
// }
export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
  providers: [GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        await dbConnect(); // Ensure proper database connection

        // Check if the user already exists in the database
        const existingUser = await userModel.findOne({ email: profile?.email });

        if (!existingUser) {
          // If the user doesn't exist, create a new user
          await userModel.create({
            email: profile?.email,
            name: profile?.name,
            picture: profile?.picture,
            role: 'student'
          });
          console.log('New user created:', profile?.email);
        } else {
          console.log('Existing user: ', profile?.email);
        }
      } catch (error) {
        console.error('Error during sign-in:', error);
        // Handle error appropriately, such as throwing it or returning false
        return false;
      }
      return true
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl
    // },
    async session({ session, user, token }) {
      session.role = token.role
      // console.log(session)
      return session
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        try {
          await dbConnect(); // Ensure proper database connection
          const existingUser = await userModel.findOne({ email: user.email });
          console.log('existing user', existingUser)
          // If the user exists, add their role to the session
          if (existingUser) {
            token.role = existingUser?.role ?? "student";
          }
        } catch (err) {
          console.log(err)
        }

      }

      // console.log(token)
      return token
    }
  },
  session: { strategy: 'jwt' }
})