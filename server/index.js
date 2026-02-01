const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const ENGINE_URL = process.env.ENGINE_URL || 'http://localhost:8000';

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection (Placeholder for now)
// mongoose.connect(process.env.MONGO_URI, ...)

// Routes
app.get('/', (req, res) => {
    res.send('Campus Placement API Gateway');
});

// Proxy to Python Engine
app.post('/api/evaluate', async (req, res) => {
    try {
        const { student, criteria } = req.body;
        // Call Python Service
        const response = await axios.post(`${ENGINE_URL}/evaluate`, { student, criteria });
        res.json(response.data);
    } catch (error) {
        console.error("Engine Error:", error.message);
        res.status(500).json({ error: "Failed to evaluate eligibility via Engine" });
    }
});

// Mock Job Data Route
app.get('/api/jobs', (req, res) => {
    res.json([
        { id: 1, company: "Google", role: "SDE I", ctc: "30 LPA", criteria: { min_cgpa: 8.5, max_backlogs: 0 } },
        { id: 2, company: "TCS", role: "System Engineer", ctc: "7 LPA", criteria: { min_cgpa: 6.0, max_backlogs: 1 } },
        { id: 3, company: "Amazon", role: "SDE Intern", ctc: "80K/mo", criteria: { min_cgpa: 7.5, max_backlogs: 0 } }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
