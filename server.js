const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3500;
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const db = require('./Database/dbQueries');
const { nextTick } = require('process');

const frontEndURL = 'http://localhost';
const frontEndHostPort = '4200';

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {

    res.redirect(`${frontEndURL}:${frontEndHostPort}`);

});


app.post('/api/submitComplaint', async (req, res) => {
  if(!req.body.token) {
    res.send({status: "user not logged in"});
  }
  try {
    const userID = jwt.verify(req.body.token, process.env.ACCESS_SECRET);
    complaint = req.body;
    complaint.userId = userID._id;
    delete complaint.token;
    db.reportIncident(complaint);
    console.log(complaint);
    res.send({status: "incident reported"});
  } catch (error) {
    console.log(error);
    res.send({
      description: "access token invalid",
      verification: false
    });
  }
});

app.post('/fetchComplaints',verify, async (req, res) => {
  complaints = await db.userIncidents({userId: req.body.user._id});
  res.send(complaints);
});
app.post('/deleteComplaints',verify, async (req, res) => {
  complaints = await db.userIncidents({userId: req.body.user._id});
  res.send(complaints);
});
app.post('/updateComplaints',verify, async (req, res) => {
  try {
    update = await db.userIncidents({userId: req.body.user._id, _id: req.body._id}, req.body.update);
    res.send({status: true});
  } catch (error) {
    console.log(error);
    res.send({status: false})
  }
});


//user end-points
app.post('/login', async (req,res) => {
  console.log(req.body);
  //data validation
  if(!req.body.email) return res.send({status: "email field empty"});
  if(!req.body.password) return res.send({status: "password field empty"});

  //fetch user
  const user = await db.findUser({"email": req.body.email});

  //check if user is found
  if(user == null){
    res.send({status: "Incorrect credentials"});

  }else{
    //check if password is valid
    const password = await bcrypt.compare(req.body.password, await user.password)
    if(!password) return res.send({status: "access denied (incorrect password)"});

    //create access token
    const accessToken = jwt.sign(
      { 
        _id: user._id,
        admin: user.admin
      }, 
      process.env.ACCESS_SECRET, 
      { expiresIn: '3h' });

    //send a welcome back with token id
    res.send({
      status: "Welcome back, " + user.email,
      AT: accessToken
    })
  }

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

function verify(req,res,next) {
  console.log("verify function: ",req.body)
  const token = req.body.token;
  if(!token) return res.send('Access Denied no access token: '+ token);
  try {
      const user = jwt.verify(token, process.env.ACCESS_SECRET);
      req.body.user = user;
      next();
  } catch (error) {
    console.log(error);
      res.send("access token invalid");
  }
}

app.post('/verify', async (req,res) => {
  const token = req.body.token;

  if(!token){ 
    return res.send(
    {
      description: 'Access Denied no access token: '+ token,
      verification: false
    });
  }

  try {
    const user = jwt.verify(token, process.env.ACCESS_SECRET);
    res.send({verification: true, admin: user.admin});
  } catch (error) {
    console.log(error);
    res.send({
      description: "access token invalid",
      verification: false,
      admin: false
    });
  }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})