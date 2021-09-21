const connection = require('./dbConnection');
const connect = connection.connect;
const disconnect = connection.disconnect;
const getMongoClient = connection.getMongoClient;

async function getAllUsers() {
    let client = getMongoClient();
    await connect(client);

    let usersList = await client.db('ASDdata').collection('Users').find().toArray();
    
    await disconnect(client);
    return usersList;
    
}
async function addUser(newUser) {
    let client = getMongoClient();
    await connect(client);

    const user = await client.db("ASDdata").collection("Users").insertOne(newUser);
    console.log("new user added: ", user);
}

async function findUser(user){
    let client = getMongoClient();
    await connect(client);

    const fetchedUser = await client.db("ASDdata").collection("Users").findOne(user);
    return fetchedUser;
}

module.exports = {
    getAllUsers: getAllUsers, addUser, findUser
};