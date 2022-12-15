const User = require('../models/user');
const { response } = require('express');
const { validationResult } = require('express-validator');

const getUsers = async (req, res) => {
	const users = await User.find({}, 'name email role');
	res.json({
		ok: true,
		users,
	});
};

const createUser = async (req, res = response) => {
	const { name, password, email } = req.body;

	try {
		const emailAlreadyExits = await User.findOne({ email });

		if (emailAlreadyExits) {
			return res.status(400).json({
				ok: false,
				mas: 'Email already exists',
			});
		}

		var user = new User(req.body);
		await user.save();

		res.json({
			ok: true,
			user,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			ok: false,
			msg: 'Unespected Error',
		});
	}
};

module.exports = {
	getUsers,
	createUser,
};
