import { connectToDatabase } from "@/helper/db";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    await connectToDatabase();

    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    /* =====================================================
       1️⃣ ADMIN EMAIL (Contact Notification)
    ===================================================== */
    const adminEmail = await resend.emails.send({
      from: "Intercom SIM Cards <info@intercomsimcards.co.uk>",
      to: ["info@intercomsimcards.co.uk"],
      subject: `New Contact Enquiry – ${name}`,
      html: `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#ffffff;color:#111;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="border:1px solid #eaeaea;padding:28px;">
            
            <tr>
              <td>
                <strong>New Contact Enquiry</strong>
              </td>
            </tr>

            <tr><td height="20"></td></tr>

            <tr>
              <td style="font-size:14px;line-height:1.6;">
                A new contact message has been received from the website.
              </td>
            </tr>

            <tr><td height="16"></td></tr>

            <tr>
              <td style="font-size:14px;">
                <strong>Name:</strong> ${name}<br/>
                <strong>Email:</strong> ${email}
              </td>
            </tr>

            <tr><td height="16"></td></tr>

            <tr>
              <td style="font-size:14px;">
                <strong>Message:</strong><br/>
                ${message.replace(/\n/g, "<br/>")}
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
      `,
    });

    if (adminEmail.error) {
      console.error("Admin email failed:", adminEmail.error);
      throw new Error("Admin email failed");
    }

    /* =====================================================
       2️⃣ CUSTOMER CONFIRMATION EMAIL (Optional but recommended)
    ===================================================== */
    await resend.emails.send({
      from: "Intercom SIM Cards <info@intercomsimcards.co.uk>",
      to: [email],
      subject: "We’ve received your message",
      html: `
<!DOCTYPE html>
<html>
  <body style="font-family:Arial,sans-serif;background:#ffffff;color:#111;">
    <p>Hello ${name},</p>
    <p>
      Thank you for contacting <strong>Intercom SIM Cards</strong>.
      We have received your message and our team will get back to you shortly.
    </p>
    <p>
      If you need urgent assistance, please email us at
      <a href="mailto:info@intercomsimcards.co.uk">
        info@intercomsimcards.co.uk
      </a>.
    </p>
    <p>
      Kind regards,<br/>
      <strong>Intercom SIM Cards Team</strong>
    </p>
  </body>
</html>
      `,
    });

    /* =====================================================
       SUCCESS RESPONSE
    ===================================================== */
    return Response.json({ success: true });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }
}
