const mongo = require('mongodb');
const url = `mongodb://localhost:27017`;





module.exports =  async function _init(guildName) {

    const client = new mongo.MongoClient(url);
    await client.connect();
    const database = client.db(guildName);

    // create all needed tables for bot to work
    //roles:
    // name: modrole
    // name: rankedrole
    //maps:
    // 1 table per map with pictures?
    //
    //chats:
    // id: 111222333
    try{
        await database.createCollection('roles');
        await database.createCollection('maps');
        await database.createCollection('chats');
        console.log(`>${guildName} - Init`)
    }
    catch(e){
        return e;
    } 
    
}