import { RSVPDetailsType } from "../reducer/RSVPInit";

export const emailGuestTemplate = (
  hostname: string,
  clientname: string,
  data: RSVPDetailsType
) => {
  return `<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <title></title>
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
      body {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      table,
      td {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
      p {
        display: block;
        margin: 13px 0;
      }
    </style>
    <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG />
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
    <![endif]-->
    <!--[if lte mso 11]>
      <style type="text/css">
        .mj-outlook-group-fix {
          width: 100% !important;
        }
      </style>
    <![endif]-->

    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Cabin:400,700"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Poppins:400,700"
      rel="stylesheet"
      type="text/css"
    />
    <style type="text/css">
      @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
      @import url(https://fonts.googleapis.com/css?family=Cabin:400,700);
      @import url(https://fonts.googleapis.com/css?family=Poppins:400,700);
    </style>
    <!--<![endif]-->

    <style type="text/css">
      @media only screen and (min-width: 480px) {
        .mj-column-per-100 {
          width: 100% !important;
          max-width: 100%;
        }
        .mj-column-per-50 {
          width: 50% !important;
          max-width: 50%;
        }
      }
    </style>
    <style media="screen and (min-width:480px)">
      .moz-text-html .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
      .moz-text-html .mj-column-per-50 {
        width: 50% !important;
        max-width: 50%;
      }
    </style>

    <style type="text/css">
      @media only screen and (max-width: 479px) {
        table.mj-full-width-mobile {
          width: 100% !important;
        }
        td.mj-full-width-mobile {
          width: auto !important;
        }
      }
    </style>
    <style type="text/css">
      .hide_on_mobile {
        display: none !important;
      }
      @media only screen and (min-width: 480px) {
        .hide_on_mobile {
          display: block !important;
        }
      }
      .hide_section_on_mobile {
        display: none !important;
      }
      @media only screen and (min-width: 480px) {
        .hide_section_on_mobile {
          display: table !important;
        }

        div.hide_section_on_mobile {
          display: block !important;
        }
      }
      .hide_on_desktop {
        display: block !important;
      }
      @media only screen and (min-width: 480px) {
        .hide_on_desktop {
          display: none !important;
        }
      }
      .hide_section_on_desktop {
        display: table !important;
        width: 100%;
      }
      @media only screen and (min-width: 480px) {
        .hide_section_on_desktop {
          display: none !important;
        }
      }

      p,
      h1,
      h2,
      h3 {
        margin: 0px;
      }

      ul,
      li,
      ol {
        font-size: 11px;
        font-family: Ubuntu, Helvetica, Arial;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      @media only screen and (max-width: 480px) {
        .mj-column-per-100 {
          width: 100% !important;
          max-width: 100% !important;
        }
        .mj-column-per-100 > .mj-column-per-100 {
          width: 100% !important;
          max-width: 100% !important;
        }
        .mj-column-per-50 {
          width: 100% !important;
          max-width: 100% !important;
        }
        .mj-column-per-100 > .mj-column-per-50 {
          width: 50% !important;
          max-width: 50% !important;
        }
      }
    </style>
  </head>
  <body style="word-spacing: normal; background-color: #ffffff">
    <div style="background-color: #ffffff">
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->

      <div style="margin: 0px auto; max-width: 600px">
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="width: 100%"
        >
          <tbody>
            <tr>
              <td
                style="
                  direction: ltr;
                  font-size: 0px;
                  padding: 0px 0px 0px 0px;
                  text-align: center;
                "
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->

                <div
                  class="mj-column-per-100 mj-outlook-group-fix"
                  style="
                    font-size: 0px;
                    text-align: left;
                    direction: ltr;
                    display: inline-block;
                    vertical-align: top;
                    width: 100%;
                  "
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align: top"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="center"
                          style="
                            font-size: 0px;
                            padding: 0px 0px 0px 0px;
                            word-break: break-word;
                          "
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tbody>
                              <tr>
                                <td style="width: 600px">
                                  <img
                                  src="${hostname}/img/${clientname}/emailheader.jpg"
                                    style="
                                      border: 0;
                                      display: block;
                                      outline: none;
                                      text-decoration: none;
                                      height: auto;
                                      width: 100%;
                                      font-size: 13px;
                                    "
                                    width="600"
                                    height="auto"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 30px 0px 0px 0px;
                            word-break: break-word;
                          "
                        >
                          <div
                            style="
                              font-family: Ubuntu, Helvetica, Arial, sans-serif;
                              font-size: 13px;
                              line-height: 1.5;
                              text-align: left;
                              color: #000000;
                            "
                          >
                            <h1
                              style="
                                font-family: 'Cabin', sans-serif;
                                font-size: 22px;
                                text-align: center;
                              "
                            >
                              <span
                                style="
                                  font-family: Poppins, sans-serif;
                                  font-size: 15px;
                                  color: rgb(41, 41, 41);
                                "
                                >Thank you for your RSVP!</span
                              >
                            </h1>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 7.5px 7.5px 7.5px 7.5px;
                            word-break: break-word;
                          "
                        >
                          <div
                            style="
                              font-family: Ubuntu, Helvetica, Arial, sans-serif;
                              font-size: 13px;
                              line-height: 1.5;
                              text-align: left;
                              color: #000000;
                            "
                          >
                            <p
                              style="
                                font-size: 11px;
                                font-family: Ubuntu, Helvetica, Arial;
                                text-align: center;
                              "
                            >
                              <span
                                style="
                                  font-family: Poppins, sans-serif;
                                  font-size: 12px;
                                  color: rgb(41, 41, 41);
                                "
                                ><strong>Name:</strong> ${data.firstname} ${
    data.lastname
  }</span
                              >
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 7px 7px 7px 7px;
                            word-break: break-word;
                          "
                        >
                          <div
                            style="
                              font-family: Ubuntu, Helvetica, Arial, sans-serif;
                              font-size: 13px;
                              line-height: 1.5;
                              text-align: left;
                              color: #000000;
                            "
                          >
                            <p
                              style="
                                font-size: 11px;
                                font-family: Ubuntu, Helvetica, Arial;
                                text-align: center;
                              "
                            >
                              <span
                                style="
                                  font-family: Poppins, sans-serif;
                                  font-size: 12px;
                                  color: rgb(41, 41, 41);
                                "
                                ><strong>Email:</strong>
                                ${data.email}<br
                              /></span>
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 7px 7px 7px 7px;
                            word-break: break-word;
                          "
                        >
                          <div
                            style="
                              font-family: Ubuntu, Helvetica, Arial, sans-serif;
                              font-size: 13px;
                              line-height: 1.5;
                              text-align: left;
                              color: #000000;
                            "
                          >
                            <p
                              style="
                                font-size: 11px;
                                font-family: Ubuntu, Helvetica, Arial;
                                text-align: center;
                              "
                            >
                              <span
                                style="
                                  font-family: Poppins, sans-serif;
                                  font-size: 12px;
                                  color: rgb(41, 41, 41);
                                "
                                ><strong>Phone:</strong> ${data.contact}<br
                              /></span>
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 7px 7px 7px 7px;
                            word-break: break-word;
                          "
                        >
                          <div
                            style="
                              font-family: Ubuntu, Helvetica, Arial, sans-serif;
                              font-size: 13px;
                              line-height: 1.5;
                              text-align: left;
                              color: #000000;
                            "
                          >
                            <p
                              style="
                                font-size: 11px;
                                font-family: Ubuntu, Helvetica, Arial;
                                text-align: center;
                              "
                            >
                              <span
                                style="
                                  font-family: Poppins, sans-serif;
                                  font-size: 12px;
                                  color: rgb(41, 41, 41);
                                "
                                ><strong>Is the Attendee Coming:</strong>
                                ${data.areYouAttending.toString() === "true" ? "Yes" : "No"}<br
                              /></span>
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 7px 7px 7px 7px;
                            word-break: break-word;
                          "
                        >
                          <div
                            style="
                              font-family: Ubuntu, Helvetica, Arial, sans-serif;
                              font-size: 13px;
                              line-height: 1.5;
                              text-align: left;
                              color: #000000;
                            "
                          >
                            <p
                              style="
                                font-size: 11px;
                                font-family: Ubuntu, Helvetica, Arial;
                                text-align: center;
                              "
                            >
                              <strong
                                ><span
                                  style="
                                    font-family: Poppins, sans-serif;
                                    font-size: 12px;
                                    color: rgb(41, 41, 41);
                                  "
                                  >Number of Attendees:</span
                                ></strong
                              ><span
                                style="
                                  font-family: Poppins, sans-serif;
                                  font-size: 12px;
                                  color: rgb(41, 41, 41);
                                "
                              >
                                ${data.numberOfAttendees}<br
                              /></span>
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 7px 7px 7px 7px;
                            word-break: break-word;
                          "
                        >
                          <div
                            style="
                              font-family: Ubuntu, Helvetica, Arial, sans-serif;
                              font-size: 13px;
                              line-height: 1.5;
                              text-align: left;
                              color: #000000;
                            "
                          >
                            <p
                              style="
                                font-size: 11px;
                                font-family: Ubuntu, Helvetica, Arial;
                                text-align: center;
                              "
                            >
                              <strong
                                ><span
                                  style="
                                    font-family: Poppins, sans-serif;
                                    font-size: 12px;
                                    color: rgb(41, 41, 41);
                                  "
                                  >Guest Names:</span
                                ></strong
                              >
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 7px 7px 33px 7px;
                            word-break: break-word;
                          "
                        >
                          <div
                            style="
                              font-family: Ubuntu, Helvetica, Arial, sans-serif;
                              font-size: 13px;
                              line-height: 1.5;
                              text-align: left;
                              color: #000000;
                            "
                          >
                            <p
                              style="
                                font-size: 11px;
                                font-family: Ubuntu, Helvetica, Arial;
                                text-align: center;
                              "
                            >
                              <span
                                style="
                                  font-family: Poppins, sans-serif;
                                  font-size: 12px;
                                  color: rgb(41, 41, 41);
                                "
                                >${data.guestNames}</span
                              >
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#DDA29E" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->

      <div
      style="
        background: #dda29e;
        background-color: #dda29e;
        margin: 0px auto;
        max-width: 600px;
      "
    >
      <table
        align="center"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="background: #dda29e; background-color: #dda29e; width: 100%"
      >
        <tbody>
          <tr>
            <td
              style="
                direction: ltr;
                font-size: 0px;
                padding: 24px 0px 14px 0px;
                text-align: center;
              "
            >
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->

              <div
                class="mj-column-per-100 mj-outlook-group-fix"
                style="
                  font-size: 0px;
                  text-align: left;
                  direction: ltr;
                  display: inline-block;
                  vertical-align: top;
                  width: 100%;
                "
              >
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="vertical-align: top"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td
                        align="center"
                        style="
                          font-size: 0px;
                          padding: 0px 0px 0px 0px;
                          word-break: break-word;
                        "
                      >
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="border-collapse: collapse; border-spacing: 0px"
                        >
                          <tbody>
                            <tr>
                              <td style="width: 147px">
                                <a
                                  href="https://www.startswithletter.rsvp/"
                                  target="_blank"
                                  style="color: #0000ee"
                                >
                                  <img
                                    src="${hostname}/img/home/emailfooter.png"
                                    style="
                                      border: 0;
                                      display: block;
                                      outline: none;
                                      text-decoration: none;
                                      height: auto;
                                      width: 100%;
                                      font-size: 13px;
                                    "
                                    width="147"
                                    height="auto"
                                  />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      style="
        background: #dda29e;
        background-color: #dda29e;
        margin: 0px auto;
        max-width: 600px;
      "
    >
      <table
        align="center"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="background: #dda29e; background-color: #dda29e; width: 100%"
      >
        <tbody>
          <tr>
            <td
              style="
                direction: ltr;
                font-size: 0px;
                padding: 0px 0px 24px 0px;
                text-align: center;
              "
            >
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="width:600px;" ><![endif]-->

              <div
                class="mj-column-per-100 mj-outlook-group-fix"
                style="
                  font-size: 0;
                  line-height: 0;
                  text-align: left;
                  display: inline-block;
                  width: 100%;
                  direction: ltr;
                "
              >
                <!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td style="vertical-align:top;width:300px;" ><![endif]-->

                <div
                  class="mj-column-per-50 mj-outlook-group-fix"
                  style="
                    font-size: 0px;
                    text-align: left;
                    direction: ltr;
                    display: inline-block;
                    vertical-align: top;
                    width: 50%;
                  "
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align: top"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="right"
                          style="
                            font-size: 0px;
                            padding: 0px 5px 0px 0px;
                            word-break: break-word;
                          "
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tbody>
                              <tr>
                                <td style="width: 30px">
                                  <a
                                    href="https://www.facebook.com/startswithletter/"
                                    target="_blank"
                                    style="color: #0000ee"
                                  >
                                    <img
                                      src="${hostname}/img/home/fb.png"
                                      style="
                                        border: 0;
                                        display: block;
                                        outline: none;
                                        text-decoration: none;
                                        height: auto;
                                        width: 100%;
                                        font-size: 13px;
                                      "
                                      width="30"
                                      height="auto"
                                    />
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!--[if mso | IE]></td><td style="vertical-align:top;width:300px;" ><![endif]-->

                <div
                  class="mj-column-per-50 mj-outlook-group-fix"
                  style="
                    font-size: 0px;
                    text-align: left;
                    direction: ltr;
                    display: inline-block;
                    vertical-align: top;
                    width: 50%;
                  "
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align: top"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 0px 0px 0px 5px;
                            word-break: break-word;
                          "
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tbody>
                              <tr>
                                <td style="width: 30px">
                                  <a
                                    href="https://www.instagram.com/startswithletter/"
                                    target="_blank"
                                    style="color: #0000ee"
                                  >
                                    <img
                                      src="${hostname}/img/home/ig.png"
                                      style="
                                        border: 0;
                                        display: block;
                                        outline: none;
                                        text-decoration: none;
                                        height: auto;
                                        width: 100%;
                                        font-size: 13px;
                                      "
                                      width="30"
                                      height="auto"
                                    />
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!--[if mso | IE]></td></tr></table><![endif]-->
              </div>

              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>

      <!--[if mso | IE]></td></tr></table><![endif]-->
    </div>
  </body>
</html>
`;
};
