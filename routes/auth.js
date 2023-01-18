/*
  Path: '/api/login'
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth');
const { validateFields } = require('../middlewares/field-validator');

const router = Router();

router.post(
	'/',
	[
		check('email', 'Email is mandatory').isEmail(),
		check('password', 'Email is mandatory').not().isEmpty(),
		validateFields,
	],
	login
);

module.exports = router;
