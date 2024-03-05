const mongoose = require ('mongoose');
require('dotenv').config();

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('BBDD conectada')
    } catch {
        console.error('Error al conectar a la BBDD')
    }
};

module.exports = dbConnection;