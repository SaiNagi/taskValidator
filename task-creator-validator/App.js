const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./src/routes/tasks');
const authRoutes = require('./src/routes/auth');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Database Connection
mongoose.connect('mongodb://localhost:27017/taskManager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("DB Connection Error: ", err));

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
