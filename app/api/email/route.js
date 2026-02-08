import { connectToDatabase } from "@/helper/db";
import { usersEmail } from "@/models/email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Server-side price list (single source of truth)
const SIM_PRICES = {
  domestic: 5,
  commercial: 15,
  gate: 1.75,
};

// Payment links per SIM type (replace with real links)
const PAYMENT_LINKS = {
  domestic: "https://pay.gocardless.com/BRT00049P7B93T2",
  commercial: "https://pay.gocardless.com/BRT00049P7N4BR6",
  gate: "https://pay.gocardless.com/BRT00049P7R2PF3",
};

export async function POST(req) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const {
      fullName,
      email,
      contactNumber,
      companyNameApplicable,
      simType,
      addressLine1,
      townCity,
      county,
      postCode,
      country,
      contractAgree,
    } = body;

    // Basic validation
    if (!fullName || !email || !simType || !contractAgree) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Pricing calculation (SERVER AUTHORITY)
    const unitPrice = SIM_PRICES[simType];

    const subtotal = unitPrice;
    const total = subtotal;

    // Order ID
    const orderId = `SIM-${Date.now()}`;

    const basePaymentLink = PAYMENT_LINKS[simType];
    if (!basePaymentLink) {
      return Response.json(
        { error: "Payment link not found" },
        { status: 400 },
      );
    }

    /* =====================================================
       1️⃣ ADMIN EMAIL (internal notification)
    ===================================================== */
    const adminEmail = await resend.emails.send({
      from: "SIM Orders <info@intercomsimcards.co.uk>",
      to: ["info@intercomsimcards.co.uk"],
      replyTo: email,
      subject: `🧾 New ${simType} SIM Order – ${fullName}`,
      html: `
        <!DOCTYPE html>
<html>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#ffffff;color:#111;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table width="660" cellpadding="0" cellspacing="0" style="border:1px solid #eaeaea;padding:32px;">

          <!-- HEADER -->
          <tr>
            <td>
              <table width="100%">
                <tr>
                  <td>
                    <strong>Intercom SIM Cards</strong><br/>
                    <span style="font-size:12px;color:#666;">
                      info@intercomsimcards.co.uk<br/>
              
                    </span>
                  </td>
                  <td align="right">
                    <h2 style="margin:0;font-weight:300;">Order Receipt</h2>
                    <p style="font-size:12px;color:#666;">
                      <strong>Order ID:</strong> ${orderId}<br/>
                      ${new Date().toDateString()}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr><td height="24"></td></tr>

          <!-- CUSTOMER -->
          <tr>
            <td style="font-size:13px;">
              <strong>Billed To</strong><br/>
              ${fullName}<br/>
              ${companyNameApplicable || ""}<br/>
              ${email}<br/>
              ${contactNumber}
            </td>
          </tr>

          <tr><td height="24"></td></tr>

          <!-- ITEMS -->
          <tr>
            <td>
              <table width="100%" cellpadding="10" cellspacing="0" style="border-top:1px solid #eaeaea;border-bottom:1px solid #eaeaea;">
                <tr style="background:#f5f5f5;">
                  <th align="left">Item</th>
                  <th align="center">Qty</th>
                  <th align="right">Price</th>
                </tr>
                <tr>
                  <td>${simType} SIM Card</td>
                  <td align="center">1</td>
                  <td align="right">£${subtotal.toFixed(2)}</td>
                </tr>
              </table>
            </td>
          </tr>

          <tr><td height="16"></td></tr>

          <!-- TOTAL -->
          <tr>
            <td align="right" style="font-size:14px;font-weight:bold;">
              Total: £${total.toFixed(2)}
            </td>
          </tr>

          <tr><td height="24"></td></tr>

          <!-- ADDRESS -->
          <tr>
            <td style="font-size:12px;color:#666;">
              <strong>Delivery Address</strong><br/>
              ${addressLine1}<br/>
              ${townCity}, ${county}<br/>
              ${postCode}, ${country}
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
      to: [email],
      subject: `Your SIM Order Confirmation – ${orderId}`,
      html: `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#ffffff;color:#111;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table width="660" cellpadding="0" cellspacing="0" style="border:1px solid #eaeaea;padding:32px;">

          <!-- HEADER -->
          <tr>
            <td>
              <table width="100%">
                <tr>
                  <td>
                    <strong>Intercom SIM Cards</strong><br/>
                    <span style="font-size:12px;color:#666;">
                      info@intercomsimcards.co.uk<br/>
             
                    </span>
                  </td>
                  <td align="right">
                    <h2 style="margin:0;font-weight:300;">Order Receipt</h2>
                    <p style="font-size:12px;color:#666;">
                      <strong>Order ID:</strong> ${orderId}<br/>
                      ${new Date().toDateString()}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr><td height="24"></td></tr>

          <!-- CUSTOMER -->
          <tr>
            <td style="font-size:13px;">
              <strong>Billed To</strong><br/>
              ${fullName}<br/>
              ${companyNameApplicable || ""}<br/>
              ${email}<br/>
              ${contactNumber}
            </td>
          </tr>

          

          <tr><td height="24"></td></tr>

          <!-- ITEMS -->
          <tr>
            <td>
              <table width="100%" cellpadding="10" cellspacing="0" style="border-top:1px solid #eaeaea;border-bottom:1px solid #eaeaea;">
                <tr style="background:#f5f5f5;">
                  <th align="left">Item</th>
                  <th align="center">Qty</th>
                  <th align="right">Price</th>
                </tr>
                <tr>
                  <td>${simType} SIM Card</td>
                  <td align="center">1</td>
                  <td align="right">£${subtotal.toFixed(2)}</td>
                </tr>
              </table>
            </td>
          </tr>

          <tr><td height="16"></td></tr>

          <!-- TOTAL -->
          <tr>
            <td align="right" style="font-size:14px;font-weight:bold;">
              Total: £${total.toFixed(2)}
            </td>
          </tr>
 <tr><td height="16"></td></tr>
           <!-- PAYMENT CTA -->
          <tr style="margin-top:24px;">
            <td align="center">
              <a href="${basePaymentLink}"
                 style="display:inline-block;background:#000;color:#fff;
                        padding:14px 26px;text-decoration:none;
                        border-radius:4px;font-size:15px;">
                Pay £${total.toFixed(2)} Now
              </a>

              <p style="font-size:12px;color:#666;margin-top:12px;">
                If the button does not work, copy this link:<br/>
                ${basePaymentLink}
              </p>
            </td>
          </tr>

          <tr><td height="24"></td></tr>

          <!-- ADDRESS -->
          <tr>
            <td style="font-size:12px;color:#666;">
              <strong>Delivery Address</strong><br/>
              ${addressLine1}<br/>
              ${townCity}, ${county}<br/>
              ${postCode}, ${country}
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

    const customerEmailQuery = new usersEmail({
      email: email,
      fullName: fullName,
      contactNumber: contactNumber,
      companyNameApplicable: companyNameApplicable,
      simType: simType,
      addressLine1: addressLine1,
      townCity: townCity,
      county: county,
      postCode: postCode,
      country: country,
      contractAgree: contractAgree,
      orderId :orderId
    });

    await customerEmailQuery.save();

    /* =====================================================
       SUCCESS RESPONSE
    ===================================================== */
    return Response.json({
      success: true,
      orderId,
      subtotal,
      total,
      fullName,
      simType,
      customerEmailQuery

     
    });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Failed to process order" }, { status: 500 });
  }
}
