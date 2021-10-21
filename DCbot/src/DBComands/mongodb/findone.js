const mongo = require('mongodb');
const url = `mongodb://localhost:27017`;



/**
 * 
 * @param {string} guildName 
 * @param {string} tableName 
 * @param {string} varName 
 * @param {string} value 
 */
module.exports = async function _findOne(guildName, tableName, varName , value = '*'){

  const client = new mongo.MongoClient(url);
  await client.connect();
  const database = client.db(guildName);
  const table = database.collection(tableName)
  let x;
  if(value === '*'){
    x = await table.findOne({[varName]: {$exists: true}})
  }
  else{
    x = await table.findOne({[varName]: value})
  }

  
  if(x) return true;
  else return false;
}