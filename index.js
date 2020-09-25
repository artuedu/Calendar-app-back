const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require('./database/config');


//Express server
const app = express();

// Base de datos
dbConnection();

//CORS
app.use(cors());

//Habiliar directorio publico
app.use(express.static('public'));

//Lectura y parse del body
app.use(express.json());

//Configuración global de rutas
app.use('/api/auth', require('./routes/auth'));

//Listenner
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});