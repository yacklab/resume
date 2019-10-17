const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

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
    const language = snap.data().language;
    try {
      await mailTransport.sendMail({
        to: "morgantomasini@gmail.com", // list of receivers
        subject: "site contact", // Subject line
        text: `${JSON.stringify(snap.data(), null, 2)}`
      });
    } catch (error) {
      console.error("There was an error while sending the email:", error);
    }
    if (language === "en") {
      try {
        await mailTransport.sendMail({
          to: snap.data().email, // list of receivers
          subject: "Morgan Tomasini", // Subject line
          text: `
          Thank you for sending me a message, 
          I'll reach back to you shortly. 
          Best Regards.
          Morgan Tomasini`
        });
      } catch (error) {
        console.error("There was an error while sending the email:", error);
      }
    } else {
      try {
        await mailTransport.sendMail({
          to: snap.data().email, // list of receivers
          subject: "Morgan Tomasini", // Subject line
          text: `
          Merci pour votre message 
          Je vous recontacte rapidement.
          Bien à vous.
          Morgan Tomasini`
        });
      } catch (error) {
        console.error("There was an error while sending the email:", error);
      }
    }

    return null;
  });
