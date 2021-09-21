const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3500;
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const db = require('./Database/dbQueries');

const frontEndURL = 'http://localhost';
const frontEndHostPort = '4200';

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {

    res.redirect(`${frontEndURL}:${frontEndHostPort}`);

});

app.post('/api/submitComplaint', async (req, res) => {
  db.reportIncident(req.body);
  console.log(req.body);
  res.send({status: "incident reported"});
});

app.post('/login', async (req,res) => {
  //data validation
  if(!req.body.email) return res.send({status: "email field empty"});
  if(!req.body.password) return res.send({status: "password field empty"});

  console.log(req.body);
  //fetch user
  const user = await db.findUser({"email": req.body.email});
  console.log(await user);
  //check if password is valid
  const password = await bcrypt.compare(req.body.password, await user.password)
  if(!password) return res.send({status: "access denied (incorrect password)"});

  //create access and refresh token. 
  const accessToken = jwt.sign(
    { _id: user._id }, 
    process.env.ACCESS_SECRET, 
    { expiresIn: '1m' });

  const refreshToken = jwt.sign(
    {_id: user._id}, 
    process.env.REFRESH_SECRET, 
    { expiresIn: '1h' });

  //send a welcome back with token id
  res.send({
    status: "Welcome back, " + user.email,
    AT: accessToken,
    RT: refreshToken
  })
})

app.post('/register', async (req,res) => {
  //data validation
  if(!req.body.email) return res.send({status: "email field empty"});
  if(!req.body.password) return res.send({status: "password field empty"});

  //check if email exists
  userEmail = await db.findUser({email: req.body.email});
  if(userEmail) return res.send({status: "email exists: " + userEmail.email});
  
  //hash user password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt)
  req.body.password = hashedPassword;
  
  //add user to mongoDB
  db.addUser(req.body);
  res.send(`added user: ${req.body}`);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})