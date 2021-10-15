const mongo = require('mongodb');
const url = `mongodb://localhost:27017`;
const dc = require('discord.js');


module.exports = async function select(guildName, tableName, varName, value){

  const client = new mongo.MongoClient(url);
  await client.connect();
  const database = client.db(guildName);
  const table = database.collection(tableName)

  const x = await table.findOne({[varName]: value}).then(result =>{
    console.log(`>${guildName} - Select data`)
    client.close();
    delete result["_id"]
    return result
  })
}