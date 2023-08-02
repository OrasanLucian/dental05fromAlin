import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	issue: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
});

const appointment = mongoose.model('appointment', schema);

export default appointment;
