import React, { useState } from 'react';
import axios from 'axios';

export const Appointment = () => {
	const [name, setName] = useState('');
	const [issue, setIssue] = useState('');
	const [date, setDate] = useState('');
	const [phone, setPhone] = useState('');

	const appointmentURL = 'https://dental05.onrender.com/api/appointments';
	const handleSubmit = async () => {
		const body = { name, issue, date, phone };

		const { reponse } = await axios.post(appointmentURL, body, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};

	return (
		<div>
			<div>
				<label htmlFor="name">Name</label>
				<input
					onInput={(e) => setName(e.target.value)}
					style={{ border: '1px solid black' }}
					type="text"
					id="name"
				/>
			</div>
			<div>
				<label htmlFor="issue">Descrierea problemei</label>

				<input
					onInput={(e) => setIssue(e.target.value)}
					style={{ border: '1px solid black' }}
					type="text"
					id="issue"
				/>
			</div>
			<div>
				<label htmlFor="date">Data la care doriti programarea</label>
				<input
					onInput={(e) => setDate(e.target.value)}
					style={{ border: '1px solid black' }}
					type="text"
					id="date"
				/>
			</div>
			<div>
				<label htmlFor="phone">Numar de telefon</label>
				<input
					onInput={(e) => setPhone(e.target.value)}
					style={{ border: '1px solid black' }}
					type="text"
					id="phone"
				/>
			</div>
			<button onClick={handleSubmit} style={{ background: 'gray' }}>
				Trimite
			</button>
		</div>
	);
};
