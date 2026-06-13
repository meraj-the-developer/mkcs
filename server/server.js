const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();

app.use(cors({
    origin: ['http://localhost:4200', 'http://127.0.0.1:4200']
}));

app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'Backend is running'
    });
});

app.post('/api/contact', async (req, res) => {
    console.log('Contact request received:', req.body);

    try {
        const { firstName, lastName, email, service, message } = req.body;

        if (!firstName || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'First name, email and message are required.'
            });
        }

        if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !process.env.MAIL_TO) {
            console.log('Missing env values:', {
                GMAIL_USER: !!process.env.GMAIL_USER,
                GMAIL_APP_PASSWORD: !!process.env.GMAIL_APP_PASSWORD,
                MAIL_TO: !!process.env.MAIL_TO
            });

            return res.status(500).json({
                success: false,
                message: 'Missing Gmail configuration in server/.env'
            });
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD.replace(/\s/g, '')
            },
            connectionTimeout: 10000,
            greetingTimeout: 10000,
            socketTimeout: 10000
        });

        console.log('Sending email...');

        await transporter.sendMail({
            from: `"MKCS Website" <${process.env.GMAIL_USER}>`,
            to: process.env.MAIL_TO,
            replyTo: email,
            subject: `New website enquiry from ${firstName} ${lastName || ''}`,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Website Enquiry</h2>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName || 'Not provided'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service Area:</strong> ${service || 'Not selected'}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `
        });

        console.log('Email sent successfully');

        return res.json({
            success: true,
            message: 'Your enquiry has been sent successfully.'
        });

    } catch (error) {
        console.error('Email sending error:', error);

        return res.status(500).json({
            success: false,
            message: error.message || 'Email could not be sent.'
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Email server running on http://localhost:${PORT}`);
    console.log('Gmail user loaded:', process.env.GMAIL_USER ? 'YES' : 'NO');
    console.log('Gmail password loaded:', process.env.GMAIL_APP_PASSWORD ? 'YES' : 'NO');
    console.log('Mail to loaded:', process.env.MAIL_TO ? 'YES' : 'NO');
});