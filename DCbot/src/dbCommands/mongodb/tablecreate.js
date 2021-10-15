
const mongo = require('mongodb');
const dc = require('discord.js')
const url = `mongodb://localhost:27017`;

/**
 * 
 * @param {string} guildName 
 * @param {string} tableName 
 * @returns {void}
 */
module.exports = async function createTable(guildName, tableName){
    const client = new mongo.MongoClient(url);
    await client.connect();
    const database = client.db(guildName);
    
    database.createCollection(tableName).then(() =>{
        console.log(`>${guildName} - Create Table`)
    })
        
      
   
}
