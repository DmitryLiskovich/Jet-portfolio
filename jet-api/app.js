const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const http = require('http');

const port = process.env.PORT || '3000';

const app = express();

app.use((req, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    response.setHeader("Access-Control-Allow-Headers", "content-type");
    next();
})

// view engine setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const videos = require('./routes/videos');
app.use('/api/videos', videos);
const analytics = require('./routes/analytics');
app.use('/api/analytics', analytics);
const categories = require('./routes/category');
app.use('/api/categories', categories);

const server = http.createServer(app);

server.listen(port);
