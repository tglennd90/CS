const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const colors = require('colors');

const app = express();

const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/citizen_service', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose: Connected'.green)
});

// Data Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

// HTTP Request Logger
app.use(morgan('tiny'));

app.use('/', routes);


app.listen(PORT, console.log(`Server: http://localhost:${PORT}`.cyan));