const { response } = require('express');
const Pet = require('../models/pet');
const User = require('../models/user');

const getPets = async (req, res = response) => {
	const pets = await Pet.find();
	console.log(pets);
	res.json({
		ok: true,
		pets,
	});
};

//create PET
const createPet = async (req, res = response) => {
	const uid = req.uid;

	const pet = new Pet({
		user: uid,
		...req.body,
	});

	try {
		const petDB = await pet.save();
		const user = await User.findById(pet.user);
		user.petsIDs.push(pet._id);
		await user.save({ validateBeforeSave: false });

		res.status(200).json({
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
