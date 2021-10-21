const mongo = require('mongodb');
const url = `mongodb://localhost:27017`;



/**
 * 
 * @param {string} guildName 
 * @param {string} tableName 
 * @param {string} varName 
 * @param {string} value 
 * @returns {void}
 */
module.exports = async function _insert(guildName, tableName, varName, value) {

  const client = new mongo.MongoClient(url);
  await client.connect();
  const database = client.db(guildName);
  const table = database.collection(tableName)

  if(await table.findOne({[varName]: value})){
    return false
  }

  const obj = {[varName]:value}
  
  await table.insertOne(obj)
  client.close();
  return 1
}

