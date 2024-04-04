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
  const userAgent = req.headers['user-agent'];

  if (userAgent === 'Shopify-Captain-Hook') {
    shopifyHookCounter++;
    res.send(`This is the about page. Shopify-Captain-Hook request count: ${shopifyHookCounter}`);
  } else if (userAgent.includes('Chrome') || userAgent.includes('Firefox')) {
    chromeFirefoxCounter++;
    res.send(`This is the about page. Chrome/Firefox request count: ${chromeFirefoxCounter}`);
  } else {
    // Email functionality (commented out)
    /*
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sejalinfy@gmail.com',
        pass: '1234'
      }
    });

    var mailOptions = {
      from: 'sejalinfy@gmail.com',
      to: 'sejalben.chovatia@infosys.com',
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
    */

    // File writing functionality (commented out)
    /*
    const filePath = path.join('data.txt');
    const data = 'This is some sample data.12121';
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return;
      }
      console.log('File written successfully!');
    });
    */

    res.send('This is the about page.');
  }
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
