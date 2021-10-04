const connection = require('./dbConnection');
const connect = connection.connect;
const disconnect = connection.disconnect;
const getMongoClient = connection.getMongoClient;

var ObjectId = require('mongodb').ObjectId; 


async function getAllUsers() {
    //connect to db
    let client = getMongoClient();
    await connect(client);

    //query DB. Fetch all users
    let usersList = await client.db('ASDdata').collection('Users').find().toArray();

    //disconnect and return
    await disconnect(client);
    return usersList;
    
}
async function addUser(newUser) {
    //connect to db
    let client = getMongoClient();
    await connect(client);

    //query DB. add user
    const user = await client.db("ASDdata").collection("Users").insertOne(newUser);
    console.log("new user added: ", user);
}

async function findUser(user){
    //connect to db
    let client = getMongoClient();
    await connect(client);

    //query DB. Fetch users
    const fetchedUser = await client.db("ASDdata").collection("Users").findOne(user);
    return fetchedUser;
}

async function reportIncident(incident){
    //connect to db
    let client = getMongoClient();
    await connect(client);

    //query DB. add incident report
    const report = await client.db("ASDdata").collection("Complaints").insertOne(incident);
    console.log("new report added: ", report);
}

async function userIncidents(account){
    //connect to db
    let client = getMongoClient();
    await connect(client);
    console.log("ACCOUNT NUMBER: ", account)
    //query DB. add incident report
    const fetchedIncidents = await client.db("ASDdata").collection("Complaints").find(account).toArray();
    return fetchedIncidents;
}
async function userIncident(account,CID){
    //connect to db
    let client = getMongoClient();
    await connect(client);
    console.log("ACCOUNT NUMBER: ", account)
    //query DB. add incident report
    const fetchedIncident = await client.db("ASDdata").collection("Complaints").findOne({_id: ObjectId(CID)});
    return fetchedIncident;
}

async function updateIncident(incident, update){
    //connect to db
    let client = getMongoClient();
    await connect(client);

    //query DB. add incident report
    const fetchedIncidents = await client.db("ASDdata").collection("Complaints").updateOne(incident, update).toArray();
    return fetchedIncidents;
}
async function deleteIncident(incidentID, userID) {
    //connect to db
    let client = getMongoClient();
    await connect(client);

    //query DB. add incident report
    const fetchedIncidents = await client.db("ASDdata").collection("Complaints").deleteOne({_id: ObjectId(incidentID), userId: userID});
    return fetchedIncidents;
}


module.exports = {
    getAllUsers: getAllUsers, addUser, findUser, reportIncident, userIncidents, deleteIncident, updateIncident, userIncident
};