const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World from Canada. 1 hour to go for arrival of 2021!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
