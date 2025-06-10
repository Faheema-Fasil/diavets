const Content =require('../models/websiteContentModel')
exports.getDetails= async (req, res) => {
    try {
      const contentList = await Content.find();
      res.json(contentList);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }