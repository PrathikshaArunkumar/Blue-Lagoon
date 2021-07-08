const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');

require('dotenv').config(); //to store environment variables

const app = express();
const port = process.env.PORT || 5000; //create express server

app.use(cors());
app.use(express.json()); // parse json

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const roomsRouter = require('./routes/rooms');

app.use('/rooms', roomsRouter);

//heroku
if(process.env.NODE_ENV ==='production'){
    app.use(express.static('build'));
}

app.listen(port, () => { //starts server
    console.log('Server is running on port ${port}');
});