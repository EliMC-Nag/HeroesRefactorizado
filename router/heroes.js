const express = require('express');
const router = express.Router();
const heroesController = require('../controller/heroesController');

router.get('/heroes',heroesController.mostrarJSON);
router.get('/heroes/detalle/:id',heroesController.detalle);
router.get('/heroes/bio/:id/:ok',heroesController.bio);

module.exports = router;



