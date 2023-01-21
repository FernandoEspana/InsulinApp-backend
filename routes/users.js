/*
  Route /api/users
*/
const { Router } = require('express');
const { check } = require('express-validator');
const {
	getUsers,
	createUser,
	updateUser,
	deleteUser,
} = require('../controllers/users');
const { validateFields } = require('../middlewares/field-validator');
const { validateJWT } = require('../middlewares/validate-jwt');

router = Router();

router.get('/', validateJWT, getUsers);

router.post(
	'/',
	validateJWT,
	// Middlewares to validate several required fields
	[
		check('name', 'The name is mandatory').not().isEmpty(),
		check('password', 'The password is mandatory').not().isEmpty(),
		check('role', 'The user role is mandatory').not().isEmpty(),
		check('email', 'Email wrong format').isEmail(),
		validateFields,
	],
	createUser
);

router.put(
	'/:id',
	validateJWT,
	[
		check('name', 'The name is mandatory').not().isEmpty(),
		check('email', 'Email wrong format').isEmail(),
		validateFields,
	],
	updateUser
);
router.delete('/:id', deleteUser);
module.exports = router;
