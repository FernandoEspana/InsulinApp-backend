/**
 * pets
 * route: /api/pets
 */
const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/field-validator');
const { validateJWT } = require('../middlewares/validate-jwt');

const {
	getPets,
	createPet,
	updatePet,
	deletePet,
} = require('../controllers/pets');

router = Router();

router.get('/', getPets);

router.post('/', createPet);

router.put('/:id', [], updatePet);
router.delete('/:id', deletePet);

module.exports = router;
