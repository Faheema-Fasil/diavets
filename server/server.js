const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const contentRoutes = require('./routes/contentRoutes');

const app = express();
// Ensure uploads folder exists
const fs = require('fs');
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/content', contentRoutes);

// DB Connection
mongoose.connect('mongodb+srv://minnufasil12:newProject@cluster0.qilak17.mongodb.net/diavet?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Start Server
app.listen(5000, () => console.log('Server running at http://localhost:5000'));
