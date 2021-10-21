const mongo = require('mongodb');
const url = `mongodb://localhost:27017`;



/**
 * @param {string} guildName 
 * @param {string} tableName 
 */
module.exports = async function picktable(guildName, tableName){

    const client = new mongo.MongoClient(url);
    await client.connect();
    const database = client.db(guildName);

    const x = await database.collection(tableName).find({})
    const y = await x.toArray();
    
    client.close()
    return y
}