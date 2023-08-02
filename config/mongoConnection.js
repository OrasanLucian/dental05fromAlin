import mongoose from 'mongoose';
import config from 'config';

const mongoURL = process.env.mongoURL || config.get('mongoURL');

export const connectToDB = async () => {
	try {
		mongoose.connect(mongoURL);
		console.log('Connection to MongoDB succesfull!');
	} catch (error) {
		console.log(error);
	}
};
