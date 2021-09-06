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

module.exports = {
    getAllUsers: getAllUsers,
};