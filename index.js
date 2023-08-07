import express from 'express';
import { connectToDB } from './config/mongoConnection.js';
import serviceRouter from './api/service.js';
import appointmentRouter from './api/appointment.js';
import cors from 'cors';
import path from 'path';

const app = express();

connectToDB();

app.use(cors());
const options = {
	origin: ['http://127.0.0.1:5173', 'https://dental05.onrender.com'],
};
app.use(cors(options));

app.use('/api/services', serviceRouter);
app.use('/api/appointments', appointmentRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/dist')));
app.get('*', (req, res) =>
	res.sendFile(path.join(__dirname, '/frontend/dist/index.html'))
);

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
