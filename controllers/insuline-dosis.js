const { response } = require('express');
const InsulineDosis = require('../models/insuline-dosis');
const Pet = require('../models/pet');

const getInsulineDosis = async (req, res = response) => {
	const insulineDosis = await InsulineDosis.find().populate('pet', 'name');
	res.status(200).json({
		ok: true,
		insulineDosis,
	});
};
//TODO: Create insuline DOSIS
const createInsulineDosis = async (req, res = response) => {
	const insulineDosis = new InsulineDosis({
		...req.body,
	});

	try {
		const pet = await Pet.findById(insulineDosis.pet);
		pet.insulineDosisIDs.push(insulineDosis);
		await pet.save({ validateBeforeSave: false });
		const insulineDosisDB = await insulineDosis.save();

		res.status(200).json({
			ok: true,
			insulineDosis: insulineDosisDB,
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: error,
		});
	}
};

const updatInsulineDosis = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'update Insuline Dosis',
	});
};

const deleteInsulineDosis = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'delete Insuline Dosis',
	});
};

module.exports = {
	getInsulineDosis,
	createInsulineDosis,
	updatInsulineDosis,
	deleteInsulineDosis,
};
