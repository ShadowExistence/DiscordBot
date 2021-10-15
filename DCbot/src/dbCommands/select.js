const MongoClient = require('mongodb').MongoClient;
const url = `mongodb://localhost:27017`;
const dc = require('discord.js')

/**
 * @param {dc.Message} msg 
 * @param {string[]} args
*/

async function select(msg, args){


  const guildName = msg.guild.name.replace(' ', '')
  const client = new MongoClient(url);
  await client.connect();
  const database = client.db(guildName);
  const table = database.collection(args[0])
  const lastId = await table.countDocuments({});

  const propertyName = args[1]
  const valueToFind = args[2]

  const x = await table.findOne({propertyName: valueToFind})




}