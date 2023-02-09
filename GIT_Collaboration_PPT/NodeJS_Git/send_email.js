var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'athiramj123@gmail.com',
    pass: 'copf sysx vewv lisf'
  }
});

var mailOptions = {
  from: 'athiramj123@gmail.com',
  to: 'suvarna007bars@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});