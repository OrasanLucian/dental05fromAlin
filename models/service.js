import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	category: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
});

const service = mongoose.model('service', schema);

export default service;
