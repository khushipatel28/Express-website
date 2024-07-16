const express = require('express')
const app = express()

app.use(express.static("public"));

app.get('/home', function (req, res) {
//   res.send('Hello World')
  res.sendFile(__dirname + '/home.html');
})
app.get('/about', function (req, res) {
    // res.send(__dirname + '/about.html);
    res.sendFile(__dirname + '/about.html');
  })
  app.get('/contact', function (req, res) {
    // res.send(__dirname + '/contact.htmlt;')
    res.sendFile(__dirname + '/contact.html');
  })
  app.get('/cake/amd', function (req, res) {
    res.send('Hello amd cake')
  })
  app.get('/cake/surat', function (req, res) {
    res.send('Hello surat cake')
  })
  app.get('/img1.JPG', function (req, res) {
    res.send('/img1.JPG')
  })
 

app.listen(3006)