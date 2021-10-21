const mongo = require('mongodb');
const url = `mongodb://localhost:27017`;



/**
 * 
 * @param {string} guildName 
 * @param {string} tableName 
 * @param {string} varName 
 * @param {string} value 
 */
module.exports = async function _selectByID(guildName, tableName, varName){

  const client = new mongo.MongoClient(url);
  await client.connect();
  const database = client.db(guildName);
  const table = database.collection(tableName)
  console.log(`>${guildName} - Select Data`)
  const x = await table.findOne({[varName]: {$exists: true}})
  return x
}