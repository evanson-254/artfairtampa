import nodeMailer from "nodemailer";


const transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: Number(process.env.MAIL_PORT ?? 587),
  secure: false,
  auth: {
    user: process.env.MAIL_USER|| "evanson1053@gmail.com",
    pass: process.env.MAIL_PASS|| "yrnzyyzspxmbsjee",
  },
});

export default async function sendMail(to: string, subject: string, body: string) {
    await transporter.verify();
    console.log("SMTP connection successful");

  const info = await transporter.sendMail({
    from: process.env.MAIL_FROM|| "evanson1053@gmail.com",
    to,
    subject,
    html: body,
  });


  console.log("Message sent: %s", info.messageId);
  return info;
}

export function artistApplicationEmail(data: {
  first: string;
  last: string;
  email: string;
  phone: string;
  medium: string[];
  bio: string;
  booth: string;
  payment: string;
  referrer: string;
  heard: string;
  requirements: string;
  subscribe?: string;
  portfolio?: string;
  instagram?: string;
  facebook?: string;
}) {
  const escapeHtml = (value: string = "") =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const mediums = Array.isArray(data.medium)
    ? data.medium
        .map(
          (medium) => `
            <span style="
              display:inline-block;
              background:#f3f1ed;
              color:#292929;
              padding:7px 12px;
              border-radius:999px;
              font-size:13px;
              font-weight:600;
              margin:0 5px 5px 0;
            ">
              ${escapeHtml(medium)}
            </span>
          `
        )
        .join("")
    : "";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Artist Application</title>
</head>

<body style="
  margin:0;
  padding:0;
  background:#f5f4f1;
  font-family:Arial, Helvetica, sans-serif;
  color:#222;
">

  <table
    width="100%"
    cellpadding="0"
    cellspacing="0"
    border="0"
    style="background:#f5f4f1;padding:40px 20px;"
  >
    <tr>
      <td align="center">

        <!-- Main Container -->
        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="
            max-width:680px;
            background:#ffffff;
            border-radius:20px;
            overflow:hidden;
            box-shadow:0 8px 30px rgba(0,0,0,0.06);
          "
        >

          <!-- Header -->
          <tr>
            <td style="
              background:#171717;
              padding:36px 40px;
            ">

              <div style="
                font-size:12px;
                letter-spacing:2px;
                text-transform:uppercase;
                color:#aaa;
                margin-bottom:14px;
              ">
                Artist Application
              </div>

              <div style="
                font-size:30px;
                line-height:1.2;
                font-weight:700;
                color:#ffffff;
              ">
                New artist submission
              </div>

              <div style="
                margin-top:10px;
                font-size:14px;
                color:#bdbdbd;
              ">
                A new application has been submitted to your exhibition.
              </div>

            </td>
          </tr>


          <!-- Applicant -->
          <tr>
            <td style="padding:36px 40px 10px;">

              <div style="
                font-size:12px;
                font-weight:700;
                letter-spacing:1.5px;
                text-transform:uppercase;
                color:#999;
                margin-bottom:18px;
              ">
                Applicant
              </div>

              <div style="
                font-size:24px;
                font-weight:700;
                color:#171717;
                margin-bottom:20px;
              ">
                ${escapeHtml(data.first)} ${escapeHtml(data.last)}
              </div>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:8px 0;color:#888;font-size:13px;width:100px;">
                    Email
                  </td>

                  <td style="padding:8px 0;font-size:14px;">
                    <a
                      href="mailto:${escapeHtml(data.email)}"
                      style="color:#171717;text-decoration:underline;"
                    >
                      ${escapeHtml(data.email)}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:8px 0;color:#888;font-size:13px;">
                    Phone
                  </td>

                  <td style="padding:8px 0;font-size:14px;">
                    ${escapeHtml(data.phone)}
                  </td>
                </tr>
              </table>

            </td>
          </tr>


          <!-- Divider -->
          <tr>
            <td style="padding:20px 40px 0;">
              <div style="height:1px;background:#eeeeee;"></div>
            </td>
          </tr>


          <!-- Art Profile -->
          <tr>
            <td style="padding:30px 40px 10px;">

              <div style="
                font-size:12px;
                font-weight:700;
                letter-spacing:1.5px;
                text-transform:uppercase;
                color:#999;
                margin-bottom:18px;
              ">
                Art Profile
              </div>

              <div style="
                font-size:13px;
                color:#888;
                margin-bottom:9px;
              ">
                Medium
              </div>

              <div style="margin-bottom:24px;">
                ${mediums}
              </div>

              <div style="
                font-size:13px;
                color:#888;
                margin-bottom:9px;
              ">
                Artist Bio
              </div>

              <div style="
                font-size:15px;
                line-height:1.7;
                color:#333;
              ">
                ${escapeHtml(data.bio).replace(/\n/g, "<br />")}
              </div>

            </td>
          </tr>


          <!-- Booth / Payment -->
          <tr>
            <td style="padding:30px 40px 10px;">

              <div style="
                font-size:12px;
                font-weight:700;
                letter-spacing:1.5px;
                text-transform:uppercase;
                color:#999;
                margin-bottom:18px;
              ">
                Exhibition Details
              </div>

              <table width="100%" cellpadding="0" cellspacing="0">

                <tr>
                  <td
                    width="50%"
                    style="
                      background:#f7f6f3;
                      padding:20px;
                      border-radius:12px;
                    "
                  >
                    <div style="
                      font-size:12px;
                      color:#888;
                      margin-bottom:8px;
                    ">
                      Booth Size
                    </div>

                    <div style="
                      font-size:16px;
                      font-weight:700;
                      color:#171717;
                    ">
                      ${escapeHtml(data.booth)}
                    </div>
                  </td>

                  <td width="12"></td>

                  <td
                    width="50%"
                    style="
                      background:#f7f6f3;
                      padding:20px;
                      border-radius:12px;
                    "
                  >
                    <div style="
                      font-size:12px;
                      color:#888;
                      margin-bottom:8px;
                    ">
                      Payment Method
                    </div>

                    <div style="
                      font-size:16px;
                      font-weight:700;
                      color:#171717;
                    ">
                      ${escapeHtml(data.payment)}
                    </div>
                  </td>
                </tr>

              </table>

            </td>
          </tr>


          <!-- Additional Information -->
          <tr>
            <td style="padding:30px 40px 10px;">

              <div style="
                font-size:12px;
                font-weight:700;
                letter-spacing:1.5px;
                text-transform:uppercase;
                color:#999;
                margin-bottom:18px;
              ">
                Additional Information
              </div>

              ${
                data.referrer
                  ? `
                    <div style="margin-bottom:20px;">
                      <div style="font-size:13px;color:#888;margin-bottom:6px;">
                        Referral
                      </div>

                      <div style="font-size:14px;color:#333;">
                        ${escapeHtml(data.referrer)}
                      </div>
                    </div>
                  `
                  : ""
              }

              ${
                data.heard
                  ? `
                    <div style="margin-bottom:20px;">
                      <div style="font-size:13px;color:#888;margin-bottom:6px;">
                        How they heard about the event
                      </div>

                      <div style="font-size:14px;color:#333;">
                        ${escapeHtml(data.heard)}
                      </div>
                    </div>
                  `
                  : ""
              }

              ${
                data.requirements
                  ? `
                    <div style="margin-bottom:20px;">
                      <div style="font-size:13px;color:#888;margin-bottom:6px;">
                        Special Requirements
                      </div>

                      <div style="font-size:14px;line-height:1.6;color:#333;">
                        ${escapeHtml(data.requirements).replace(
                          /\n/g,
                          "<br />"
                        )}
                      </div>
                    </div>
                  `
                  : ""
              }
              ${
                data.portfolio
                  ? `
                    <div style="margin-bottom:20px;">
                      <div style="font-size:13px;color:#888;margin-bottom:6px;">
                        Portfolio
                      </div>
                      <div style="font-size:14px;color:#333;">
                        <a href="${escapeHtml(data.portfolio)}" target="_blank" rel="noreferrer">
                          ${escapeHtml(data.portfolio)}
                        </a>
                      </div>
                    </div>
                  `
                  : ""
              }
              ${
                data.instagram
                  ? `
                    <div style="margin-bottom:20px;">
                      <div style="font-size:13px;color:#888;margin-bottom:6px;">
                        Instagram
                      </div>
                      <div style="font-size:14px;color:#333;">
                        <a href="https://instagram.com/${escapeHtml(data.instagram)}" target="_blank" rel="noreferrer">
                          ${escapeHtml(data.instagram)}
                        </a>
                      </div>
                    </div>
                  `
                  : ""
              }
              ${
                data.facebook
                  ? `
                    <div style="margin-bottom:20px;">
                      <div style="font-size:13px;color:#888;margin-bottom:6px;">
                        Facebook
                      </div>
                      <div style="font-size:14px;color:#333;">
                        <a href="https://facebook.com/${escapeHtml(data.facebook)}" target="_blank" rel="noreferrer">
                          ${escapeHtml(data.facebook)}
                        </a>
                      </div>
                    </div>
                  `
                  : ""
              }

            </td>
          </tr>


          <!-- CTA -->
          <tr>
            <td style="padding:30px 40px 40px;">

              <div style="
                background:#f7f6f3;
                border-radius:14px;
                padding:20px 22px;
              ">

                <div style="
                  font-size:13px;
                  color:#888;
                  margin-bottom:6px;
                ">
                  Newsletter
                </div>

                <div style="
                  font-size:14px;
                  font-weight:600;
                  color:#222;
                ">
                  ${
                    data.subscribe
                      ? "Artist opted in to receive updates."
                      : "Artist did not opt in to receive updates."
                  }
                </div>

              </div>

            </td>
          </tr>


          <!-- Footer -->
          <tr>
            <td style="
              background:#fafafa;
              padding:24px 40px;
              border-top:1px solid #eeeeee;
            ">

              <div style="
                font-size:12px;
                color:#999;
                line-height:1.6;
              ">
                This notification was generated automatically from your
                artist application form.
              </div>

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;
}

//await sendMail("evanson1053@gmail.com", "test", "test");