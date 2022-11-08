const express = require('express');

const router = express.Router();
const _HeroesController = require('../controllers/Heroes/Heroes.controller');

router
    .get('/HeroesGet', _HeroesController.getHeroes)
    .put('/HeroeUpdate/:id', _HeroesController.updateHeroe)
    .post('/HeroeCreate', _HeroesController.createHeroe)
    .delete('/HeroeDelete/:id', _HeroesController.deleteHeroe);

module.exports = router;