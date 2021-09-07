const express = require('express');
const app = express();
const cors = require('cors');
const port = 3500;
const bodyParser = require('body-parser');


const db = require('./Database/dbQueries');

const frontEndURL = 'http://localhost';
const frontEndHostPort = '4200';

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {

    res.redirect(`${frontEndURL}:${frontEndHostPort}`);

});

app.post('/api/submitComplaint/', async (req, res) => {

  console.log(req.body);
  res.end();

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})