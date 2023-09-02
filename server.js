// require modules so that we can use them
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require("cors");

const app = express();

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
const SENDER_EMAIL = process.env.SENDER_EMAIL;
// Middleware
app.use(bodyParser.json());
app.use("/", router);
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is working');
});
// API endpoint to send emails
app.post('/send-email', async (req, res) => {
    const { firstName, lastName, email, phoneNumber, comments } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'outlook',
        secure: false,
        auth: {
            user: SENDER_EMAIL,
            pass: PASSWORD 
        }
    });

    let mailOptions = {
        from: SENDER_EMAIL,
        to: EMAIL,
        subject: 'New Contact Form Submission',
        text: " First Name: " + firstName 
        +"\n Last Name: " + lastName
        +"\n email: " + email
        +"\n phoneNumber: " + phoneNumber
        +"\n comments: " + comments
    };

    console.log("click");

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).send('Email sent successfully!');
        }
    })
});

// Serve static assets if in production
// In process then it will handleing the frontend code
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});