import express from 'express';
import { connectToDB } from './config/mongoConnection.js';

const app = express();

connectToDB();

app.get('/', (request, response) => response.send('My first response'));

const PORT = 5500;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));