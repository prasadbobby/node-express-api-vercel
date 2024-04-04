const express = require('express')
const nodemailer = require('nodemailer');

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/about', (req, res) => {
  var transporter = nodemailer.createTransport({
     host: "smtp.gmail.com",
    // SMTP is unlike most network protocols, which only have a single port number. 
    // SMTP has at least 3. They are port numbers 25, 587, and 465.
    // Port 25 is still widely used as a **relay** port from one server to another.
    // Port for SSL: 465
    // Port for TLS/STARTTLS: 587
    port: 465,
    //  if true the connection will use TLS when connecting to server. If false (the 
    // default) then TLS is used if server supports the STARTTLS extension. In most 
    // cases set this value to true if you are connecting to port 465. For port 587 or 
    // 25 keep it false
    secure: true, // use TLS
    auth: {
      user: 'knvdurgaprasad610@gmail.com',
      pass: 'xjiu okjo agdf uirf'
    }
  });

  var mailOptions = {
    from: 'knvdurgaprasad610@gmail.com',
    to: 'sejalinfy@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });



  res.send('This is the about page.');
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Logic to handle contact form submission
  res.send(`Thank you, ${name}, for your message.`);
});

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' }
  ];
  res.json(users);
});

// Export the Express API
module.exports = app
