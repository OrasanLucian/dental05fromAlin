import express from 'express';
import ServiceModel from '../models/service.js';
import { check, validationResult } from 'express-validator';
import bodyParser from 'body-parser';

const router = express.Router();

const jsonParser = bodyParser.json();

router.get('/', async (request, response) => {
	try {
		const services = await ServiceModel.find();
		response.status(200).json(services);
	} catch (error) {
		console.error(error);
		response.status(500).send('Server error');
	}
});

router.post(
	'/',
	[
		check('service', 'Service is required').not().isEmpty(),
		check('name', 'Name is required').not().isEmpty(),
		check('price', 'Price is required').not().isEmpty(),
	],
	jsonParser,
	async (request, response) => {
		const { name, category, price } = request.body;

		try {
			let service = await ServiceModel.findOne({
				name,
				category,
				price,
			});

			if (service) {
				return response.status(400).json({ error: 'Service already defined' });
			}

			service = new ServiceModel({
				name,
				category,
				price,
			});

			service.save();
			response.status(201).send(service);
		} catch (error) {
			console.error(error);
			response.status(500).send('Server error');
		}
	}
);

export default router;
