import dbConnect from "@/mongoose/mongodb";
import userModel from "@/mongoose/userSchema";
interface USER {
          email: String,
          name: String,
          picture: String,
          role: 'student' | 'teacher',
          applied:Boolean,
}
export default async function createUser(data: USER) {
    try {
        await dbConnect();
        const resp = await userModel.create(data)
        return resp
    } catch (err) {
        throw err
    }
}