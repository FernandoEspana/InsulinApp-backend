/**
 * insuline dosis
 * route: /api/insuline-dosis
 */
const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/field-validator');
const { validateJWT } = require('../middlewares/validate-jwt');

const {
	getGlucoseLevels,
	createGlucoseLevels,
	updatGlucoseLevels,
	deleteGlucoseLevel,
} = require('../controllers/glucose-level');

router = Router();

router.get('/', getGlucoseLevels);

router.post('/', createGlucoseLevels);

router.put('/:id', updatGlucoseLevels);
router.delete('/:id', deleteGlucoseLevel);

module.exports = router;
