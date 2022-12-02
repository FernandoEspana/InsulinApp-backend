const express = require('express');
const { dbConnection } = require('./database/config');
var cors = require('cors');
require('dotenv').config();


const app = express();

dbConnection();

//cors config
app.use( cors() );

//read body
app.use( express.json() );

//Routes
app.use('/api/users', require('./routes/users'));


app.listen( process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})