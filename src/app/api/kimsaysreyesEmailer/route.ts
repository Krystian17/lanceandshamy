import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const data: any = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.KSR_CLIENTID,
      pass: process.env.KSR_APIKEY,
    },
  });

  const emailerName = {
    name: "Gelo and Kim Wedding <kimandgelowedding@gmail.com>",
    test: "startswithletter@gmail.com",
    address: "kimandgelowedding@gmail.com", //kimandgelowedding@gmail.com
  };
  console.log(data.emailAddress);

  const htmlContent = `
  <p style="margin:0;"><b>Name:</b> ${data.firstName} ${data.lastName}</p>
  <p style="margin:0;"><b>Email:</b> ${data.emailAddress}</p>
  <p style="margin:0;"><b>Phone:</b> ${data.phoneNumber}</p>
  <p style="margin:0;"><b>Is the attendee coming:</b> ${data.areYouAttending}</p>
  <p style="margin:0;"><b>Number of Attendees:</b> ${data.numberOfAttendees}</p>
  <p style="margin:0;"><b>Guest names:</b><br/>${data.nameOfAttendees}</p>
  `;

  //===========================================
  // Client Message
  //===========================================
  const clientMessage = {
    from: emailerName.name,
    to: data.emailAddress,
    subject: "Your RSVP is already confirmed",
    html: htmlContent,
  };

  const adminMessage = {
    from: emailerName.name,
    to: emailerName.address,
    subject: `${data.firstName} ${data.lastName} submitted an RSVP`,
    html: htmlContent,
  };

  const SendClientEmail = () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(clientMessage, (err) => {
        if (!err) {
          console.log("Client Email sent");
          resolve("Client Email sent");
        } else {
          console.log("Client Email encountered a problem: ", err);
          reject(err.message);
        }
      });
    });

  const SendAdminEmail = () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(adminMessage, (err) => {
        if (!err) {
          console.log("Admin Email sent");
          resolve("Admin Email sent");
        } else {
          console.log("Admin Email encountered a problem: ", err);
          reject(err.message);
        }
      });
    });

  try {
    await SendAdminEmail();
    await SendClientEmail();
    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
