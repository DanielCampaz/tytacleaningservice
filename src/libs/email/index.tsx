import Email from "./email";
import { Inputs } from "../components/contactform";
import nodemailer from "nodemailer";
import getConfig from "next/config";
import { render } from "@react-email/render";

export default async function SendEmail(data: Inputs) {
  const { publicRuntimeConfig } = getConfig();
  const { EMAIL_NODEMAILER, PASSWORD_NODEMAILER } = publicRuntimeConfig;
  if (
    EMAIL_NODEMAILER === undefined ||
    EMAIL_NODEMAILER === null ||
    PASSWORD_NODEMAILER === undefined ||
    PASSWORD_NODEMAILER === null
  )
    return Error("Error to Get Enviroments");
  if (
    data.email === undefined ||
    data.fullName === undefined ||
    data.message === undefined ||
    data.subject === undefined
  ) {
    return Error("Error to Data Input");
  }
  const email = `Tyta Service Cleaning <${EMAIL_NODEMAILER}>`;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    service: "gmail",
    auth: {
      // TODO: replace user and pass values from:
      // <https://forwardemail.net/guides/send-email-with-custom-domain-smtp>
      user: EMAIL_NODEMAILER,
      pass: PASSWORD_NODEMAILER,
    },
  });

  const html = render(Email(data));

  const options = {
    from: email,
    to: EMAIL_NODEMAILER,
    subject: `
    ${data.fullName} with the email ${data.email} and telephone number ${data.phone} needs a service
    `,
    html,
  };
  return transporter.sendMail(options);
}
