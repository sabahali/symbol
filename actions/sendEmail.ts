"use server";
import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
interface Params{

}
export default async function sendEmail(params:Params) {
    try{
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'sabahalick21@gmail.com',
            subject: 'Hello World',
            html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
          });
          return JSON.stringify({success:true})
    }catch(err){
        console.log(err)
        return JSON.stringify({message:"Failed"})
    }
}