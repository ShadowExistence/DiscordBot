const dc = require('discord.js');
const _insert = require('../mongodb/insert')



/**
 * 
 * @param {dc.Message} msg 
 * @param {string[]} args 
 */
module.exports =  async function insert(msg, args) {

    // if(args.length > 3){
    //     msg.channel.send('Too many arguments!')
    //     return;
    // }
   
    const guildName = msg.guild.name.replace(' ', ''); 
    const tableName = args[0];
    const x = await _insert(guildName, tableName, args[1], args[2]);
    console.log(`>${guildName} - Inserted Data`)
    console.log(`${args[1]}: ${args[2]}`)
    if(x){
        msg.channel.send('This data already exists');
        return
    }
    msg.channel.send('Data added')
    // return;
}