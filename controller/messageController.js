const catchAsyncErorr = require("../middleware/catchAsyncErorr");
const nodemailer = require("nodemailer");
const fast2sms = require("fast-two-sms");
const ErrorHandler = require("../utils/errorHandler");

const ACCOUNT_SID = "ACb5c63022db2d5b4282b0a55b0fb7aebb";
const AUTH_TOKEN = "5eab3eca48419fbca3e8f327b8710c44";

const client = require("twilio")(ACCOUNT_SID, AUTH_TOKEN);

exports.whatsapp_message = catchAsyncErorr((req, res, next) => {
  const { allStudentData, type, faculty, subject } = req.body.tempOBJ;
  let a = [];

  for (let i = 0; i < allStudentData.length; i++) {
    a.push({
      to: `whatsapp:+91${allStudentData[i].phoneNumber}`,
      body: `Dear student ${allStudentData[i].name} your ${allStudentData[i].status}y is marked for ${subject} ${type}
            --${faculty}
            `,
      from: "whatsapp:+14155238886",
    });
  }

  client.messages
    .create({
      to: `whatsapp:+917420901366`,
      body: `Dear student hleoow  `,
      from: "whatsapp:+14155238886",
    })
    .then((message) => console.log(message.sid))
    .done();

  res.status(200).json({
    status: true,
  });
});

// mail sender

exports.genrateOtp_email = catchAsyncErorr(async (req, res, next) => {
  /** testing account */
  let testAccount = await nodemailer.createTestAccount();

  if (!req.body.email) {
    return next(new ErrorHandler("please enter the email", 400));
  }

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',// true for 465, false for other ports
    port:587,
    host:"smtp.gmail.com",
    auth: {
      user: "postmantesting205@gmail.com", // generated ethereal user
      pass: "tsxldqljauuzquri", // generated ethereal password
    },
  });

  let message = {
    from: '"schoolOil" <postmantesting205@gmail.com>', // sender address
    to: `${req.body.email}`, // list of receivers
    subject: "Verify your email", // Subject line
    text: "", // plain text body
    html: `<div>
       <span>Hi ${req.body.username},</sapn>
       </br> 
       </br>
       <span>Please enter the following verification code to access your SchoolOil Account.</sapn>
       </br>
       <h2>${req.body.OTP}</h2>
       </br>
       </br> 
       <span>In case you were not trying to access your schoolOil Account & are seeing this email, please follow the instructions below:</sapn>
       
       <ul>
       <li>
       Reset your schoolOil password.
       </li>
       <li>
       Check if any changes were made to your account & user settings. If yes, revert them immediately.
       </li>
       <li>
       If you are unable to access your schoolOil Account then contact schoolOil Support
       </li>
       </ul>
       
       <div>`, // html body
  };

  transporter
    .sendMail(message)
    .then((info) => {
      return res.status(201).json({
        msg: "OTP send to your email",
        status: true,
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info),
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
});

exports.genrateOtp_mobile = catchAsyncErorr(async (req, res, next) => {
  var options = {
    authorization:
      "GRTX2EbuUVQLjW5xOF7YdBfy8gIDhcst614PnrpJSliwCAH3oz9wqyOdlCbSTfD4EF0upUmce1JRv5BX",
    message: ` schoolOil   \n Please enter the following verification code to verify your mobile number.\n ${req.body.OTP}`,
    numbers: ['9119512822'],
  };
  fast2sms.sendMessage(options);
});
