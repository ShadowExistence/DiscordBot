const mongo = require('mongodb');
const url = `mongodb://localhost:27017`;
const dc = require('discord.js')



/**
 * @param {string} guildName 
 * @returns {mongo.CollectionInfo} string[ "name" : "value" ]
 */
module.exports = async function showdb(guildName) {

    const client = new mongo.MongoClient(url);
    await client.connect();

    const database = client.db(guildName);
    
    await database.listCollections({}, {nameOnly: true}).toArray()
    .then(result =>{
        console.log(`>${guildName} - Show Tables`)
        client.close();
        return result
    })
    

       
}