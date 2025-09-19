const express = require('express');
const router = express.Router();
const cargoController = require('../controllers/cargoController');

// CRUD de Cargos


router.get('/', cargoController.listarCargo);
router.post('/', cargoController.criarCargo);
router.get('/:id', cargoController.obterCargo);
router.put('/:id', cargoController.atualizarCargo);
router.delete('/:id', cargoController.deletarCargo);

module.exports = router;
