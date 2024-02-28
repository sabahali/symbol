"use server";
import nodemailer from "nodemailer"

const email = process.env.NODEMAIL_email
const pass = process.env.NODEMAIL_password
const transport = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:email,
        pass
    }
})
interface Params {
    from: String,
    name: String,
    message: String,
}
export default async function sendGmail (params: Params){
        try{
            const info = await transport.sendMail({
                from:email,
                to:email,
                text:"sample test",
                html:`<!DOCTYPE html>
                <html lang="en">
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Help Desk Message</title>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                    }
                    .container {
                        width: 80%;
                        margin: auto;
                        background-color: #fff;
                        border-radius: 10px;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        padding: 20px;
                    }
                    .header {
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    .content {
                        margin-top: 20px;
                    }
                    .content h2 {
                        color: #333;
                    }
                    .content h3 {
                        color: #666;
                    }
                </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>Help Desk Message</h1>
                        </div>
                        <div class="content">
                            <h2>From: ${params.from}</h2>
                            <h2>Full Name: ${params.name}</h2>
                            <h3>Message: ${params.message}</h3>
                        </div>
                    </div>
                </body>
                </html>`
            })
            return JSON.stringify({ success: true ,status:200 })
        }catch(err){
            console.log(err)
            return JSON.stringify({ success: false })
        }
}
    
