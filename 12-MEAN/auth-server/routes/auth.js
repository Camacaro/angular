const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { 
  crearUsuario,
  loginUsuario,
  revalidarToken 
} = require('../controllers/auth');


const router = Router();

router.post( '/new', [
  check('email', 'El email es obligatorio').isEmail(),
  check('password', 'La contraseña es obligatoria').isLength({ min: 6 }),
  check('name', 'El nombre es obligatorio').notEmpty().isLength({ min: 5 }),
  validarCampos
] ,crearUsuario );

router.post( '/', [
  check('email', 'El email es obligatorio').isEmail(),
  check('password', 'La contraseña es obligatoria').isLength({ min: 6 }),
  validarCampos
], loginUsuario );

router.get( '/renew', revalidarToken );

module.exports = router;