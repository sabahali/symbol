"use server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
interface Params {
    from: String,
    name: String,
    message: String,
}
export default async function sendEmail(params: Params) {
    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'sabahalick21@gmail.com',
            subject: 'Hello World',
            html: `
            <div style="width: 100%; display: flex;flex-direction: column, justify-content: center; align-items: center;">
                <h1>Help Desk Message</h1>
                <div style="width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: start;">
                    <h2>From: ${params.from}</h2>
                    <h2>Full Name: ${params.name}</h2>
                    <h3>Message: ${params.message}</h3>
                </div>
            </div>
        `
        });
        if (data) {
            console.log(data)
            return JSON.stringify({ success: true ,status:200 })
        } else if (error) {
            
            return JSON.stringify({ success: false })
        }

    } catch (err) {
        console.log(err)
        return JSON.stringify({ success: false })
    }
}