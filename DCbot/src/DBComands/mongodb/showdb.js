const mongo = require('mongodb');
const url = `mongodb://localhost:27017`;



/**
 * @param {string} guildName 
 * @returns {mongo.ListCollectionsCursor<Pick<mongo.CollectionInfo, "type" | "name">>} string[ "name" : "value" ]
 */
module.exports = async function _showdb(guildName) {

    const client = new mongo.MongoClient(url);
    await client.connect();

    const database = client.db(guildName);
    
    const cursor = await database.listCollections({}, {nameOnly: true})
    const res = await cursor.toArray()
    console.log(`>${guildName} - Show Tables`)
    client.close();
    return res
}

