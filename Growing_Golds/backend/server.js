require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8070;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB Successfully Connected!");
});

// Import routers
const investerRouter = require('./routes/invester');
const inventerRouter = require('./routes/inventer');

// Use routers
app.use('/invester', investerRouter);
app.use('/inventer', inventerRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port number ${PORT}`);
});
