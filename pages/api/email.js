const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  console.log(body);
  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Subject: ${body.subject}\r\n
  message: ${body.message}
  `;
  const data = {
    to: "test@email.com",
    from: "test@email.com",
    subject: "New message from contact form",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  let transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_EMAIL_SERVER_HOST,
    port: process.env.NEXT_PUBLIC_EMAIL_SERVER_PORT,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_SERVER_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_SERVER_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_EMAIL_SERVER_USER,
    to: process.env.NEXT_PUBLIC_EMAIL_SERVER_USER,
    subject: body.subject,
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  });
  // console.log("Message sent: %s", info.messageId);
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // const response = await mail.send(data);
  return res.status(200).send({ success: true });
}
