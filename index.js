import express from 'express';
import { connectToDB } from './config/mongoConnection.js';
import serviceRouter from './api/service.js';
import appointmentRouter from './api/appointment.js';
import cors from 'cors';

const app = express();

connectToDB();

// app.get('/', (request, response) => response.send('My first response'));

app.use(cors());
const options = {
	origin: 'http://127.0.0.1:5173',
};
app.use(cors(options));
app.use('/api/services', serviceRouter);
app.use('/api/appointments', appointmentRouter);

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
