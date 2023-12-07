import { Inputs } from "../components/contactform";
import { getUrlPath } from "../utils";

export default function Email({
  email,
  fullName,
  message,
  phone,
  subject,
}: Inputs) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>
          New Service for {fullName} - {email}
        </title>
      </head>
      <body>
        <table role="presentation" border={0} className="body">
          <tr>
            <td>&nbsp;</td>
            <td className="container">
              <div className="content">
                <span className="preheader">{subject}</span>
                <table role="presentation" border={0} className="main">
                  <tr>
                    <td className="wrapper">
                      <p>Hi Tyta {`'${fullName}'`} Need a Service</p>
                      <p>
                        {`
                          ${fullName} with the email ${email} and telephone number ${phone} needs a service
                          `}
                        <br />
                        {`The message from ${fullName} is: '${message}',
                          remember to respond`}
                      </p>
                      <table
                        role="presentation"
                        border={0}
                        className="btn btn-primary"
                      >
                        <tbody>
                          <tr>
                            <td align="left">
                              <table role="presentation" border={0}>
                                <tbody>
                                  <tr>
                                    <td>
                                      {" "}
                                      <a href={getUrlPath()} target="_blank">
                                        Go to Page
                                      </a>{" "}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p>{message}</p>
                      <p>Good luck!</p>
                    </td>
                  </tr>
                </table>

                <div className="footer">
                  <table role="presentation" border={0}>
                    <tr>
                      <td className="content-block">
                        <span className="apple-link">
                          © {new Date().getFullYear()} Tyta Service Cleaning.
                          All rights reserved.
                        </span>
                        <br />
                        <a href={getUrlPath()} target="_blank">
                          Tyta Service Cleaning
                        </a>
                        .
                      </td>
                    </tr>
                    <tr>
                      <td className="content-block powered-by">
                        <a href={getUrlPath()} target="_blank">
                          Tyta Service Cleaning
                        </a>
                        .
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </td>
            <td>&nbsp;</td>
          </tr>
        </table>
      </body>
    </html>
  );
}
