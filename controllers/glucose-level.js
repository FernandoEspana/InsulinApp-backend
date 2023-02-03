const { response } = require('express');
const GlucoseLevel = require('../models/glucose-level');

const getGlucoseLevels = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'get glucose levels',
	});
};

//TODO: create glucose level
const createGlucoseLevels = async (req, res = response) => {
	const glucoseLevel = new GlucoseLevel({
		...req.body,
	});

	try {
		const glucoseLevelDB = await glucoseLevel.save();

		res.status(200).json({
			ok: true,
			glucoseLevel: glucoseLevelDB,
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: error,
		});
	}
};

const updatGlucoseLevels = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'update Glucose Level',
	});
};

const deleteGlucoseLevel = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'delete Glucose Level',
	});
};

module.exports = {
	getGlucoseLevels,
	createGlucoseLevels,
	updatGlucoseLevels,
	deleteGlucoseLevel,
};
