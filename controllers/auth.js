const { response } = require('express');
const user = require('../models/user');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');

const login = async (req, res = response) => {
	const { email, password } = req.body;

	try {
		//validar el email existe
		const userDB = await user.findOne({ email });

		if (!userDB) {
			return res.status(404).json({
				ok: false,
				msg: 'Incorect user or password',
			});
		}

		//validar el password
		const validPassword = bcrypt.compareSync(password, userDB.password);

		if (!validPassword) {
			return res.status(404).json({
				ok: false,
				msg: 'Incorect user or password',
			});
		}
		//Generar JWT
		const token = await generateJWT(userDB.id);

		return res.status(200).json({
			ok: true,
			userDB,
			token,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Unexpected Error',
		});
	}
};

module.exports = {
	login,
};
