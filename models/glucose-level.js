const { Schema, model } = require('mongoose');

const GlucoseLevelSchema = Schema(
	{
		level: {
			type: Number,
			required: true,
		},
		pet: {
			type: Schema.Types.ObjectId,
			ref: 'Pet',
			required: true,
		},
	},
	{ timestamps: true }
);

GlucoseLevelSchema.method('toJSON', function () {
	const { __v, ...object } = this.toObject();
	return object;
});

module.exports = model('GlucoseLevel', GlucoseLevelSchema);
