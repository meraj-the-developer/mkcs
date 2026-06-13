const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            message: 'Method not allowed'
        });
    }

    try {
        const { firstName, lastName, email, service, message } = req.body;

        if (!firstName || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'First name, email and message are required.'
            });
        }

        if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !process.env.MAIL_TO) {
            return res.status(500).json({
                success: false,
                message: 'Email configuration is missing.'
            });
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD.replace(/\s/g, '')
            }
        });

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

        return res.status(200).json({
            success: true,
            message: 'Your enquiry has been sent successfully.'
        });
    } catch (error) {
        console.error('Email error:', error);

        return res.status(500).json({
            success: false,
            message: error.message || 'Email could not be sent.'
        });
    }
};