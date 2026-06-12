import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Brak wymaganych pól' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Nieprawidłowy email' }, { status: 400 });
    }

    await transporter.sendMail({
      from: `${name} <${process.env.GMAIL_USER}>`,
      replyTo: email,
      to: process.env.RECIPIENT,
      subject: `Wiadomość ze strony`,
      text: `Imię: ${name}\nEmail: ${email}\n\nWiadomość:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Błąd przy wysyłaniu wiadomości:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}