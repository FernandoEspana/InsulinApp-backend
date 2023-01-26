const { Schema, model } = require('mongoose');

const InsulineDosisSchema = Schema(
	{
		units: {
			type: Number,
			require: true,
		},
		pet: {
			type: Schema.Types.ObjectId,
			ref: 'Pet',
		},
	},
	{ timestamps: true }
);

InsulineDosisSchema.method('toJSON', function () {
	const { __v, ...object } = this.toObject();
	return object;
});

module.exports = model('InsulineDosis', InsulineDosisSchema);
