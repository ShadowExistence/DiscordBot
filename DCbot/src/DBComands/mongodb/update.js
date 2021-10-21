const mongo = require('mongodb');
const url = `mongodb://localhost:27017`;



/**
 * 
 * @param {string} guildName 
 * @param {string} tableName 
 * @param {string} flag - set or add > newVar and newValue are used only with add vlag
 * set: Changes existing data with varName and varValue
 * add: Adds newVar with newValue to existing varName with specified varValue
 * @param {string} varName 
 * @param {string} varValue 
 * @param {string} newVar
 * @param {string} newValue
 */
module.exports = async function _update(guildName, tableName, flag = 'set', varName, varValue, newVar = '0', newValue = '0'){

    const client = new mongo.MongoClient(url);
    await client.connect();
    const database = client.db(guildName);
    const table = database.collection(tableName)


    if(flag === 'set'){
        //console.log(`find: ${varName}: ${varValue} > set ${varName}: ${varValue}`)
        return await table.findOneAndUpdate({[varName]: {$exists: true}}, {$set: {[varName]: varValue}})
    }
    if(flag === 'add'){
        //console.log(`find: ${varName}: ${varValue} > add ${newVar}: ${newValue}`)
        return await table.findOneAndUpdate({[varName]: varValue}, {$set: {[newVar]: newValue}})
    }
    
    
}