const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

exports.notifyContact = functions.firestore
  .document("contacts/{contactId}")
  .onCreate(async (snap, context) => {
    try {
      await mailTransport.sendMail({
        to: "morgantomasini@gmail.com", // list of receivers
        subject: "site contact", // Subject line
        text: `${JSON.stringify(snap.data(), null, 2)}`
      });
    } catch (error) {
      console.error("There was an error while sending the email:", error);
    }
    return null;
  });
