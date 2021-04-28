const express = require('express');

const app = express();

app.use( '/api/auth', require('./routes/auth') )

app.listen( 4000, () => {
  console.log(`Servidor Corriendo en el puerto ${ 4000 }`)
})
