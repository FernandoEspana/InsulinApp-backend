const { response } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req, res = response, next) => {
	//Leer el token
	const token = req.header('x-token');

	if (!token) {
		return res.status(400).json({
			ok: false,
			msg: 'request without token',
		});
	}

	try {
		const { uid } = jwt.verify(token, process.env.JWT_SECRET);
		req.uid = uid;
	} catch (error) {
		return res.status(401).json({
			ok: false,
			msg: 'Invalid token',
		});
	}

	next();
};

module.exports = {
	validateJWT,
};
