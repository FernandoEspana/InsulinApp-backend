const express = require('express');
const { dbConnection } = require('./database/config');
var cors = require('cors');
require('dotenv').config();


const app = express();

dbConnection();

//cors config
app.use( cors() );

//routes
app.get('/', (req, res) => {
  console.log('retrieve information from server');
  res.json({
    ok: true,
    msg: 'Hola Insulina'
  })
});

app.listen( process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})