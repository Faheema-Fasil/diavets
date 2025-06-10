const nodemailer = require('nodemailer');
const Contact = require('../models/contactUsModel');

exports.contactUsDetails = async (req, res) => {
  try {
    const { name, phone, email, help } = req.body;

    const newContact = new Contact({ name, phone, email, help });
    await newContact.save();

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use other SMTP services
      auth: {
        user: 'demoemail1233@gmail.com',
        pass: 'xrpecwrprzelcgcz' // use App Password, not your Gmail password
      }
    });

    // Mail to Admin (You)
    const adminMailOptions = {
      from: email,
      to: 'demoemail1233@gmail.com',
      subject: `New Contact Request from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${help}`,
    };

    // Mail to User
    const userMailOptions = {
      from: 'demoemail1233@gmail.com',
      to: email,
      subject: 'Thanks for contacting us!',
      text: `Hi ${name},\n\nThanks for reaching out. We'll get back to you shortly!\n\n- Diavets Team`,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(201).json({ message: 'Contact saved and emails sent successfully.' });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
