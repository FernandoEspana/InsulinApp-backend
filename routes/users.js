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

router = Router();

router.get('/', getUsers);

router.post(
	'/',
	// Middlewares to validate several required fields
	[
		check('name', 'The name is mandatory').not().isEmpty(),
		check('password', 'The password is mandatory').not().isEmpty(),
		check('email', 'Email wrong format').isEmail(),
		validateFields,
	],
	createUser
);

router.put(
	'/:id',
	[
		check('name', 'The name is mandatory').not().isEmpty(),
		check('email', 'Email wrong format').isEmail(),
		validateFields,
	],
	updateUser
);
router.delete('/:id', deleteUser);
module.exports = router;
