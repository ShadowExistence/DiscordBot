const mongo = require('mongodb');
const url = `mongodb://localhost:27017`;
const dc = require('discord.js')




/**
 * 
 * @param {string} guildName 
 * @param {string} tableName 
 * @param {string} varName 
 * @param {string} value 
 * @returns {void}
 */
module.exports = async function insert(guildName, tableName, varName, value) {

  const client = new mongo.MongoClient(url);
  await client.connect();
  const database = client.db(guildName);
  const table = database.collection(tableName)
  //const lastId = await table.countDocuments({}); //last custom id in the table


  const obj = {[varName]:value}

  table.insertOne(obj).then(response => {
    console.log(`>${guildName} - Inserted data`)
    client.close()
    return
  })
}



