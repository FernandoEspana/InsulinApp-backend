const { Schema, model } = require('mongoose');

const GlocoseLevelSchema = Schema(
	{
		level: {
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

GlocoseLevelSchema.method('toJSON', function () {
	const { __v, ...object } = this.toObject();
	return object;
});

module.exports = model('InsulineDosis', GlocoseLevelSchema);
