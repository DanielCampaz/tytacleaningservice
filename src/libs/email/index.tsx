import { render } from "@react-email/render";
import Email from "./email";
import { Inputs } from "../components/contactform";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import nodemailer from "nodemailer";

export default async function SendEmail(
  data: Inputs,
  callbackThen: (data: SMTPTransport.SentMessageInfo) => void,
  callbackCatch: (data: unknown) => void
) {
  const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      // TODO: replace user and pass values from:
      // <https://forwardemail.net/guides/send-email-with-custom-domain-smtp>
      user: "you@example.com",
      pass: "****************************",
    },
  });

  const html = render(Email(data));

  const options = {
    from: "you@example.com",
    to: "user@gmail.com",
    subject: `${data.email.toUpperCase()} Send Email: "${data.subject}"`,
    html,
  };
  transporter.sendMail(options).then(callbackThen).catch(callbackCatch);
}
