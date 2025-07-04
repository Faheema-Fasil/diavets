const nodemailer = require("nodemailer");
const Contact = require("../models/contactUsModel");

exports.contactUsDetails = async (req, res) => {
  try {
    const { name, phone, email, help } = req.body;

    const newContact = new Contact({ name, phone, email, help });
    await newContact.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "demoemail1233@gmail.com",
        pass: "xrpecwrprzelcgcz",
      },
    });


    const adminMailOptions = {
      from: email,
      to: "demoemail1233@gmail.com",
      subject: `New Contact Request from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${help}`,
    };


    const userMailOptions = {
      from: "demoemail1233@gmail.com",
      to: email,
      subject: "Thanks for contacting us!",
      text: `Hi ${name},

Thanks for reaching out to us. Here's a summary of your message:

Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${help}

Our team will review your message and get back to you shortly.

Best regards,
Diavets Team`,
    };

    console.log('Sending user email:', userMailOptions);
    await transporter.sendMail(userMailOptions);
    console.log('User email sent');
    
    await transporter.sendMail(adminMailOptions);
    // await transporter.sendMail(userMailOptions);

    res
      .status(201)
      .json({ message: "Contact saved and emails sent successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
