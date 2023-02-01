const { Schema, model } = require('mongoose');

const PetSchema = Schema({
	name: {
		type: String,
		required: true,
	},
	birthDay: {
		type: Date,
		required: true,
	},
	image: {
		trype: String,
	},
	user: {
		required: true,
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

PetSchema.method('toJSON', function () {
	const { __v, ...object } = this.toObject();
	return object;
});

module.exports = model('Pet', PetSchema);
