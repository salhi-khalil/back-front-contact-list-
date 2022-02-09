const express = require('express');
const DBconnection = require('./config/DBconnection');
const route = require('./routes/contact');
require('dotenv').config();

const app = express();

const port = 5000;

DBconnection();
app.use(express.json())
app.use('/api/Contacts',route)


app.listen(process.env.port, ()=>console.log(`Server running on : ${process.env.port}`));

