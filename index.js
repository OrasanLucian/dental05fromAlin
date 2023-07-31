import express from 'express';

const app = express();

app.get('/', (request, response) => response.send('My first response'));

const PORT = 5500;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));