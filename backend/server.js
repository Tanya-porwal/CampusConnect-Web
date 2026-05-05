require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected to Atlas'))
    .catch(err => console.log('MongoDB Connection Error:', err));

// CORS Configuration
const corsOptions = {
    origin: function (origin, callback) {
        const allowedOrigins = [
            'http://localhost:5173', // Vite local dev
            'http://localhost:5000',
            process.env.FRONTEND_URL // Deployed frontend URL
        ].filter(Boolean);

        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend is running' });
});

app.get('/api/debug-env', (req, res) => {
    res.json({ emailUser: process.env.EMAIL_USER || 'NOT_SET', hasPass: !!process.env.EMAIL_PASS });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// Export app for serverless deployment
module.exports = app;
