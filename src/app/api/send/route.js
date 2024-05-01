import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;
    const data = await resend.emails.send({
      from: "edson.toledo@studiohaus.com.mx",
      to: email,
      subject: `¡Hola ${name}!, gracias por contactarte con Studio Haus. Ahora tenemos su contacto (${phone}) y podremos contactarnos con usted a la brevedad.`,
      text: `Mensaje recibido: ${message}`
    });
    if (data.status == "success") {
      return NextResponse.json({message: "Email Sent"}, {status: 200});
    }
    return NextResponse.json(data);
  } catch(error) {
    return NextResponse.json({message: "Error"}, {status: 500});
  }
}