const { response } = require('express');

const getGlucoseLevels = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'get glucose levels',
	});
};

const createGlucoseLevels = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'create Glucose Level',
	});
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
