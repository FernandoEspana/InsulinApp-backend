const { response } = require('express');

const getInsulineDosis = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'get insuline Dosis',
	});
};

const createInsulineDosis = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'create Insuline Dosis',
	});
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
