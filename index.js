const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/about', (req, res) => {
  // Define the file path
  const filePath = path.join('data.txt');

  // Data to write to the file
  const data = 'This is some sample data.12121';

  // Write the data to the file
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('File written successfully!');
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
