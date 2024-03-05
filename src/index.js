const express = require('express')
const dbConnection = require('./config/db.js')
const app = express()
const router = require('./routes/productRoutes.js')
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

dbConnection();

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
  });

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})