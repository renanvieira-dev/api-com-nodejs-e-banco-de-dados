import express from 'express';

const app = express();
app.use(express.json());

const users = [];

app.post('/usuarios', (req, res) => {
   users.push(req.body);
   res.send(201);
});

app.get('/usuarios', (req, res) => {
   res.status(200).json(req.body);
});

app.listen(3000);