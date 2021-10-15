const MongoClient = require('mongodb').MongoClient;
const url = `mongodb://localhost:27017`;
const dc = require('discord.js')




/**
 * @param {dc.Message} msg 
 * @param {string[]} args
 */
module.exports = async function insert(msg, args) {

  if(args.length >= 3){
    msg.reply('To many arguments, you can give max. 2!');
    return
  }
  const guildName = msg.guild.name.replace(' ', '')
  const client = new MongoClient(url);
  await client.connect();
  const database = client.db(guildName);
  const table = database.collection(args[0])
  const lastId = await table.countDocuments({});

  let obj = {id:lastId, [args[0]]: args[1]};
  
  table.insertOne(obj).then(response => { client.close()})
  .catch(err => {throw err})
  
  await msg.reply(`Inserted data to ${args[0]}`)
  return;
}

// Posible problem with datatypes



