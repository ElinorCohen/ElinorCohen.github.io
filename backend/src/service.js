const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_SRC,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports.send = async function (req, res) {
  try {
    const { data } = req.body;
    console.log(data);
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "פנייה חדשה",
      text: `Your new password is: ${newPassword}`,
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
