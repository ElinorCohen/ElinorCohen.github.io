const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_SRC,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports.send = async function (req, res) {
  try {
    const { name, phoneNumber, Inquiry } = req.body;
    console.log(name, phoneNumber, Inquiry);
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL_DES,
      subject: "פנייה חדשה",
      text: `יש לך פנייה חדשה מ${name} מספר טלפון ${phoneNumber} נושא הפניה הוא ${Inquiry}`,
      // html: `
      //   <p>Click the following button to change your password</p>
      //    <a href="${magicLink}" style="display: inline-block; background-color: #007BFF; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 5px;">Change Password</a>
      // `,
    };

    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res
          .status(500)
          .send(
            "An error occurred while sending the message, please try again later"
          );
      }
      console.log("Email sent:", info.response);
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Error in server please try again later");
  }
};
