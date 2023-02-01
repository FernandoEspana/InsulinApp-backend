const { response } = require('express');
const Pet = require('../models/pet');

const getPets = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'get pets',
	});
};

//create PET controller
const createPet = async (req, res = response) => {
	const uid = req.uid;

	const pet = new Pet({
		user: uid,
		...req.body,
	});

  

	try {
		const petDB = await pet.save();

		res.json({
			ok: true,
			pet: petDB,
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: error,
		});
	}
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
