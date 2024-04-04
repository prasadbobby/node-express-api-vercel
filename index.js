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
    service: 'gmail',
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
