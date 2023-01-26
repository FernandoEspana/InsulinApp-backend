const { Schema, model } = require('mongoose');

const PetSchema = Schema({
	name: {
		type: String,
		require: true,
	},
	birthDay: {
		type: Date,
		require: true,
	},
	image: {
		trype: String,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

PetSchema.method('toJSON', function () {
	const { __v, ...object } = this.toObject();
	return object;
});

module.exports = model('Pet', PetSchema);
