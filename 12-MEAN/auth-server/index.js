const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use( express.static( 'public' ) )

app.use( cors() );

app.use( express.json() );

app.use( '/api/auth', require('./routes/auth') );

app.listen( process.env.PORT, () => {
  console.log(`Servidor Corriendo en el puerto ${ process.env.PORT }`);
})
