const path = require('path');
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');

require('dotenv').config();

const app = express();

dbConnection();

app.use( express.static( 'public' ) )

app.use( cors() );

app.use( express.json() );

app.use( '/api/auth', require('./routes/auth') );

// Manejar demas rutas para el angualr public y no usar el #
app.get( '*', (req, res) => {
  res.sendFile( path.resolve( __dirname, 'public/index.html' ) )
})

app.listen( process.env.PORT, () => {
  console.log(`Servidor Corriendo en el puerto ${ process.env.PORT }`);
})
