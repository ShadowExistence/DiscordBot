const MongoClient = require('mongodb').MongoClient;
const url = `mongodb://localhost:27017`;
const dc = require('discord.js')



/**
 * @param {dc.Message} msg 
 * @param {string[]} args
 * @param {argsStrings} object 
 */
module.exports = async function showdb(msg) {

    const guildName = msg.guild.name.replace(' ', '')
    const client = new MongoClient(url);
    await client.connect();

    const database = client.db(guildName);
    
    // database.collections({nameOnly: true}, (err, resu) =>{
    //     if (err) throw err;
    //     x = resu.namespace
    //     console.log(x);
    // })
    let x = await database.listCollections({}, {nameOnly: true}).toArray();
    let embed = new dc.MessageEmbed()
    let string;
    x.forEach(name =>{
        string += `.${name.name}\n`
    })
    embed.setTitle('Databases List:')
    embed.setDescription(string);
    msg.channel.send({embeds: [embed]});
    
    
    
    // .then((response) =>{
    //     console.log(response);}).catch(err => {throw err})
    
}

