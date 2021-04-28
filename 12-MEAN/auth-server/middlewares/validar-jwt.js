
const jwt = require('jsonwebtoken');

const validatJWT = (req, res, next) => {

  const token = req.header('x-token');

  if( !token ) {
    return res.status(401).json({
      ok: false,
      msg: 'Error en el token'
    });
  }

  try {
    
    const { uid, name } = jwt.verify( token, process.env.SECRET_JWT_SEED );

    req.uid = uid;
    req.name = name;    
    
  } catch (error) {
    console.log(error);
    return  res.status(401).json({
      ok: false,
      msg: 'Token no válido'
    });
  }

  next();
}

module.exports = {
  validatJWT
}