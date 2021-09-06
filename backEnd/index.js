const express = require('express');
const app = express();
const cors = require('cors');
const port = 3500;

const frontEndURL = 'http://localhost';
const frontEndHostPort = '4200';

app.use(cors());

app.get('/', (req, res) => {
    res.redirect(`${frontEndURL}:${frontEndHostPort}`);

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})