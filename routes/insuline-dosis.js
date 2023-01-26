/**
 * insuline dosis
 * route: /api/insuline-dosis
 */
const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/field-validator');
const { validateJWT } = require('../middlewares/validate-jwt');

const {
	getInsulineDosis,
	createInsulineDosis,
	updatInsulineDosis,
	deleteInsulineDosis,
} = require('../controllers/insuline-dosis');

router = Router();

router.get('/', getInsulineDosis);

router.post('/', createInsulineDosis);

router.put('/:id', updatInsulineDosis);
router.delete('/:id', deleteInsulineDosis);

module.exports = router;
