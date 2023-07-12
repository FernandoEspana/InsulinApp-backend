const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { response } = require('express');
const { validationResult } = require('express-validator');
const { generateJWT } = require('../helpers/jwt');

const getUsers = async (req, res) => {
	//Obtiene el valor el query params si es null o NaN retorna 0
	const from = Number(req.query.from) || 0;
	console.log(from);

	const [users, total] = await Promise.all([
		User.find({}, 'name email role').skip(from).populate('petsIDs'),
		User.count(),
	]);

	//const [users, total] = await User.find({}, 'name email role');
	res.status(200).json({
		ok: true,
		users,
		total,
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

		//Encriptar contraseña
		const salt = bcrypt.genSaltSync();
		user.password = bcrypt.hashSync(password, salt);

		//se guarda el usuario
		await user.save();
		const token = await generateJWT(user.id);

		res.json({
			ok: true,
			user,
			token,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			ok: false,
			msg: 'Unespected Error',
		});
	}
};

const updateUser = async (req, res = response) => {
	const uid = req.params.id;
	try {
		const userDB = await User.findById(uid);
		if (!userDB) {
			return res.status(404).json({
				ok: false,
				msg: 'No existe el usuario',
			});
		}

		const fields = req.body;
		//delete quita el campo en question de la request para no ser actualizados
		delete fields.password;
		delete fields.google;
		delete fields.email;
		console.log('fields to update', fields);

		await User.findByIdAndUpdate(uid, fields);
		const userUpdated = await User.findById(uid);

		res.json({
			ok: true,
			user: userUpdated,
		});

		//TODO: validar el token generado
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Unexpected error',
		});
	}
};

const deleteUser = async (req, res = response) => {
	const uid = req.params.id;

	try {
		const userDB = await User.findById(uid);
		if (!userDB) {
			return res.status(404).json({
				ok: false,
				msg: 'No existe el usuario',
			});
		}

		await User.findByIdAndDelete(uid);

		res.status(200).json({
			ok: true,
			msg: 'Usuario Borrado',
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Unexpected error',
		});
	}
};

module.exports = {
	getUsers,
	createUser,
	updateUser,
	deleteUser,
};

