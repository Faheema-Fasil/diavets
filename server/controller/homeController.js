
const Testimonial=require('../models/testimonialModel')
const Content = require('../models/websiteContentModel');
const Partner=require('../models/partnersModel')
exports.sectionDetailsPost = async (req, res) => {
  console.log('inside sectionDetails');
  let imagePath ="";
  try {
    const { section, description } = req.body;

    if (req.file) {

        // imagePath = req.file.path.replace('server/', '');
        imagePath =`/uploads/${req.file.filename}`;
    }



    const newContent= new Content({ section, description, image: imagePath });
    await newContent.save();

    res.status(201).json(newContent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// exports.aboutUsDetails=async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const imagePath = req.file.path.replace('server/', '');

//     const newBanner = new Content({ title, description, image: imagePath });
//     await newBanner.save();
//     res.status(201).json(newBanner);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// }

// exports.contactUsDetails = async (req, res) => {
//     try {
//       const { title, description, name, phone, email, help } = req.body;
  
//       const newContact = new Content({
//         title,
//         description,

//       });
  
//       await newContact.save();
//       res.status(201).json(newContact);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   };
  
// exports.productDetails=async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const imagePath = req.file.path.replace('server/', '');

//     const newBanner = new Content({ title, description, image: imagePath });
//     await newBanner.save();
//     res.status(201).json(newBanner);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// }
// exports.testimonialDetails=async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const imagePath = req.file.path.replace('server/', '');

//     const newBanner = new Content({ title, description, image: imagePath });
//     await newBanner.save();
//     res.status(201).json(newBanner);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// }

exports.partnerDetails = async (req, res) => {
    try {
      const { title, description } = req.body;
    //   const imagePaths = req.files.map(file => file.path.replace('server/', ''));
    const imagePaths = req.files.map(file =>`/uploads/${file.filename}`);
  
      const newBanner = new Partner({ title, description, images: imagePaths });
      await newBanner.save();
      res.status(201).json(newBanner);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  

exports.getPartnerDetails = async (req, res) => {
    try {
      const partners = await Partner.find();
      res.status(200).json(partners);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };




  
exports.addTestimonial = async (req, res) => {
    try {
      const { name, title, bg, text } = req.body;
  
      const newTestimonial = new Testimonial({ name, title, bg, text });
      await newTestimonial.save();
  
      res.status(201).json(newTestimonial);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.getAllTestimonials = async (req, res) => {
    try {
      const testimonials = await Testimonial.find();
      res.status(200).json(testimonials);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };