import express from 'express';
import AppointmentModel from '../models/appointment.js';
import { check, validationResult } from 'express-validator';
import bodyParser from 'body-parser';

const router = express.Router();

const jsonParser = bodyParser.json();

router.get('/', async (request, response) => {
	try {
		const appointments = await AppointmentModel.find();
		response.status(200).json(appointments);
	} catch (error) {
		console.error(error);
		response.status(500).send('Server error');
	}
});

router.post(
	'/',
	[
		check('name', 'Name is required').not().isEmpty(),
		check('issue', 'Issue is required').not().isEmpty(),
		check('price', 'Price is required').not().isEmpty(),
		check('phone', 'Phone number is required').not().isEmpty(),
	],
	jsonParser,
	async (request, response) => {
		const { name, issue, date, phone } = request.body;

		try {
			let appointment = await AppointmentModel.findOne({
				name,
				issue,
				date,
				phone,
			});

			if (appointment) {
				return response
					.status(400)
					.json({ error: 'Appointment already defined' });
			}

			appointment = new AppointmentModel({
				name,
				issue,
				date,
				phone,
			});

			appointment.save();
			response.status(201).send(appointment);
		} catch (error) {
			console.error(error);
			response.status(500).send('Server error');
		}
	}
);

export default router;
