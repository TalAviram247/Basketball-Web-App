const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// routes
const players = require('./routes/api/players');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/players', players);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));