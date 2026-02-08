import { connectToDatabase } from "@/helper/db";
import { activeCancel } from "@/models/activecancel";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const { email, simNumber, action } = body;

    /* =====================================================
           1️⃣ ADMIN EMAIL (internal notification)
        ===================================================== */
    const adminEmail = await resend.emails.send({
      from: "Intercom SIM Cards <info@intercomsimcards.co.uk>",
      to: ["info@intercomsimcards.co.uk"],
      subject: `New SIM ${action} Request – ${simNumber}`,
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
                <strong>New SIM ${action} Request</strong>
              </td>
            </tr>

            <tr><td height="20"></td></tr>

            <tr>
              <td style="font-size:14px;line-height:1.6;">
                A new SIM ${action} request has been received from the website.
              </td>
            </tr>

            <tr><td height="16"></td></tr>

            <tr>
              <td style="font-size:14px;">
                <strong>Customer Email:</strong> ${email}<br/>
                <strong>SIM Number:</strong> ${simNumber}
              </td>
            </tr>

            <tr><td height="20"></td></tr>

            <tr>
              <td style="font-size:13px;color:#555;">
                Please review and ${action} the SIM as soon as possible.
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
           2️⃣ CUSTOMER EMAIL (receipt / confirmation)
        ===================================================== */
    const customerEmail = await resend.emails.send({
      from: "Intercom SIM Cards <info@intercomsimcards.co.uk>",
      to: email,
      subject: `We’ve received your SIM ${action} request (${simNumber})`,

      html: `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#ffffff;color:#111;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="border:1px solid #eaeaea;padding:32px;">
            
            <!-- HEADER -->
            <tr>
              <td>
                <strong>Intercom SIM Cards</strong><br/>
                <span style="font-size:12px;color:#666;">
                  info@intercomsimcards.co.uk<br/>
        
                </span>
              </td>
            </tr>

            <tr><td height="24"></td></tr>

            <!-- MESSAGE -->
            <tr>
              <td style="font-size:14px;line-height:1.6;">
                Hello,<br/><br/>
                We have received your request to ${action} your SIM card.
                Our team is currently reviewing the details and will ${action}
                your SIM as soon as possible.
              </td>
            </tr>

            <tr><td height="16"></td></tr>

            <!-- SIM NUMBER -->
            <tr>
              <td style="font-size:14px;">
                <strong>SIM Card Number received:</strong><br/>
                <span style="font-size:16px;color:#000;">
                  ${simNumber}
                </span>
              </td>
            </tr>

            <tr><td height="24"></td></tr>

            <!-- SUPPORT -->
            <tr>
              <td style="font-size:13px;line-height:1.6;color:#333;">
                If you experience any issues or have questions in the meantime,
                please contact us at
                <a href="mailto:info@intercomsimcards.co.uk" style="color:#000;text-decoration:none;">
                  info@intercomsimcards.co.uk
                </a>.
              </td>
            </tr>

            <tr><td height="24"></td></tr>

            <!-- FOOTER -->
            <tr>
              <td style="font-size:13px;color:#333;">
                Kind regards,<br/>
                <strong>Intercom SIM Cards Team</strong>
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

    if (customerEmail.error) {
      console.error("Customer email failed:", customerEmail.error);
      throw new Error("Customer email failed");
    }

    const customerActiveRequest = new activeCancel({
      email: email,
      simNumber: simNumber,
    });

    await customerActiveRequest.save();

    /* =====================================================
           SUCCESS RESPONSE
        ===================================================== */
    return Response.json({
      success: true,
      customerActiveRequest,
    });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Failed to process order" }, { status: 500 });
  }
}
