const mongo = require('mongodb');
const url = `mongodb://localhost:27017`;
const dc = require('discord.js')

/**
 * @param {dc.Message} msg 
 * @param {string[]} args
*/

async function grabDB(guildName, tableName){


  const client = new mongo.MongoClient(url);
  await client.connect();
  const database = client.db(guildName);
  const table = database.collection(tableName)

  
 //will get data to txt file and send it
  


}