// api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Only POST requests allowed');
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send('Please fill in all fields.');
  }

  // Set up mail transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,      // e.g. frediezra360@gmail.com
      pass: process.env.MY_EMAIL_PASS, // App password (not account password)
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.MY_EMAIL,
      subject: 'Message from LUCKY MD XFORCE Bot',
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    res.status(200).send('✅ Message sent successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('❌ Failed to send message.');
  }
}
