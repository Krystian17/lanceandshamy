import { emailClientTemplate } from '@/modules/justinandariana/email/client';
import { emailGuestTemplate } from '@/modules/justinandariana/email/guest';
import { RSVPDetailsType } from '@/modules/justinandariana/reducer/RSVPInit';

import { NextResponse } from 'next/server';

import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: Request) {
  const data: RSVPDetailsType = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.JA_CLIENTID,
      pass: process.env.JA_APIKEY
    }
  });

  const clientname = 'justinandariana';
  const hostname = {
    local: 'localhost:3000',
    live: 'https://www.startswithletter.rsvp'
  };

  const emailerName = {
    name: 'Justin and Ariana Wedding <justinandarianawedding@gmail.com',
    address: 'startswithletter@gmail.com',
    testaddress: 'startswithletter@gmail.com'
  };

  //===========================================
  // Client Message
  //===========================================
  const clientMessage: Mail.Options = {
    from: emailerName.name,
    to: data.email,
    subject: 'Your RSVP is already confirmed',
    html: emailGuestTemplate(hostname.live, clientname, data)
  };

  const adminMessage: Mail.Options = {
    from: emailerName.name,
    to: emailerName.address,
    subject: `${data.firstname} ${data.lastname} submitted an RSVP`,
    html: emailClientTemplate(hostname.live, clientname, data)
  };

  const errorMessage: Mail.Options = {
    from: 'sheetDB error log',
    to: emailerName.testaddress,
    subject: `${data.firstname} ${data.lastname} - sheetDB error log`,
    html: `An error occured ${data.firstname} ${data.lastname}`
  };

  const SendSheet = async () => {
    try {
      const response = await fetch('https://sheetdb.io/api/v1/suju4fidesc65', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [
            {
              'First Name': data.firstname,
              'Last Name': data.lastname,
              Email: data.email,
              Phone: data.contact,
              Attendees: data.numberOfAttendees,
              'Guest Names': data.guestNames,
              'Attending?': `${data.areYouAttending.toString() === 'true' ? 'Yes' : 'No'}`
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`SheetDB responded with status: ${response.status}`);
      }
    } catch (err) {
      console.log('Error SheetDB', err);
      await transporter.sendMail(errorMessage); // Await this to ensure error mail is sent
      throw err; // Re-throw the error so it can be caught in the outer try-catch
    }
  };

  const SendClientEmail = () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(clientMessage, err => {
        if (!err) {
          console.log('Client Email sent');
          resolve('Client Email sent');
        } else {
          console.log('Client Email encountered a problem: ', err);
          reject(err.message);
        }
      });
    });

  const SendAdminEmail = () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(adminMessage, err => {
        if (!err) {
          console.log('Admin Email sent');
          resolve('Admin Email sent');
        } else {
          console.log('Admin Email encountered a problem: ', err);
          reject(err.message);
        }
      });
    });

  try {
    await SendSheet();
    await SendAdminEmail();
    await SendClientEmail();
    return NextResponse.json({ message: 'Email sent' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
