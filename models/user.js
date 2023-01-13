const { Schema, model } = require('mongoose');

const UserSchema = Schema({
	name: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
		unique: true,
	},
	password: {
		type: String,
		require: true,
	},
	image: {
		trype: String,
	},
	role: {
		type: String,
		require: false,
		default: 'USER_ROLE',
	},
});

UserSchema.method('toJSON', function () {
	const { __v, _id, password, ...object } = this.toObject();
	object.uuid = _id;
	return object;
});

module.exports = model('User', UserSchema);
