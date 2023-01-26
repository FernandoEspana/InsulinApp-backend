const { response } = require('express');

const getPets = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'get pets',
	});
};

const createPet = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'create pet',
	});
};

const updatePet = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'update pet',
	});
};

const deletePet = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'delete pet',
	});
};

module.exports = {
	getPets,
	createPet,
	updatePet,
	deletePet,
};
