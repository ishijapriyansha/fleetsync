const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
connectDB();

app.use(cors({
  origin: 'http://192.168.0.104:3000',
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', userRoutes);

require('dotenv').config();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
