const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log('Mongo DB online!!!')
  } catch (error) {
    console.log('Ha occurido un error ->', error);
  }
}

module.exports = {
  dbConnection
}