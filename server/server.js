const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const contentRoutes = require('./routes/contentRoutes');

const app = express();

const fs = require('fs');
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}


app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use('/api/content', contentRoutes);


mongoose.connect('mongodb+srv://minnufasil12:newProject@cluster0.qilak17.mongodb.net/diavet?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});


app.listen(5000, () => console.log('Server running at http://localhost:5000'));
