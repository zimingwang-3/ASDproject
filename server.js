const express = require('express');
const app = express();
const cors = require('cors');
const port = 3500;

const db = require('./Database/dbQueries');

const frontEndURL = 'http://localhost';
const frontEndHostPort = '4200';

app.use(cors());

app.get('/', async (req, res) => {

    res.redirect(`${frontEndURL}:${frontEndHostPort}`);

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})