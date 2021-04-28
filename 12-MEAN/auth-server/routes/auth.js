const { Router } = require('express');

const router = Router();

router.post( '/new', (req, res) => {

  return res.json({
    ok: true,
    msg: 'Crear usuario /new'
  })

});

router.post( '/', (req, res) => {

  return res.json({
    ok: true,
    msg: 'Login de usuario /'
  })

});

router.get( '/renew', (req, res) => {

  return res.json({
    ok: true,
    msg: 'Renew /renew'
  })

});

module.exports = router;