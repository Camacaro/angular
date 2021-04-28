const { response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async (req, res = response) => {

  const { email, name, password } = req.body;

  try {

    let usuario = await Usuario.findOne({ email });

    if( usuario ) {
      return  res.status(400).json({
        ok: false,
        msg: 'El usuario ya existe con ese email'
      });
    }

    usuario = new Usuario( req.body );

    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );

    await usuario.save();

    const token = await generarJWT(usuario.id, name);

    return res.status(201).json({
      ok: true,
      uid: usuario.id,
      name,
      token
    });
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador'
    })
  }
}

const loginUsuario = async (req, res = response) => {

  const { email, password } = req.body;

  try {

    const usuario = await Usuario.findOne({ email });

    if ( !usuario ) {
      return  res.status(400).json({
        ok: false,
        msg: 'El usuario ó password no es correcto'
      });
    }

    const validPassword = bcryptjs.compareSync( password, usuario.password );

    if ( !validPassword ) {
      return  res.status(400).json({
        ok: false,
        msg: 'El usuario ó password no es correcto'
      });
    }

    const token = await generarJWT(usuario.id, usuario.name);

    return res.status(200).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token
    });
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador'
    })
  }
}

const revalidarToken = async (req, res) => {

  const { uid, name } = req;

  try {
    const token = await generarJWT(uid, name);

    return res.json({
      ok: true,
      uid,
      name,
      token
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador'
    })
  }
  

}

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken
}