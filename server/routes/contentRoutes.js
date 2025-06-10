const express = require('express');
const multer = require('multer');
const path = require('path');

const {partnerDetails, sectionDetailsPost, getPartnerDetails, addTestimonial, getAllTestimonials } = require('../controller/homeController');
const { contactUsDetails } = require('../controller/contactController');
const { getDetails } = require('../controller/getDetailsContoller');

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '../uploads')),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

// const upload = multer({ storage });
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only JPEG, PNG, JPG files are allowed'), false);
    }
  }
});

// POST route to upload content
router.post('/content', upload.single('image'),sectionDetailsPost);

router.post('/partner', upload.array('images', 3), partnerDetails);
router.get('/partner', getPartnerDetails); 

router.post('/contact',contactUsDetails)

// GET route to fetch content
router.get('/',getDetails);

router.post('/testimonials/add', addTestimonial);
router.get('/testimonials', getAllTestimonials);
module.exports = router;
