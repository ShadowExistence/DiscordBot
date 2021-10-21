const dc = require('discord.js')
const createtable = require('../mongodb/tablecreate')



/**
 * 
 * @param {dc.Message} msg 
 * @param {string[]} args 
 */
module.exports = async function createtb(msg, args) {
    
    if(args.length > 1){
        msg.channel.send('Too many arguments!')
        return;
    }
    const guildName = msg.guild.name.replace(' ', '');
    const tableName = args[0];
    createtable(guildName, tableName);

    await msg.channel.send(`Created new table: ${tableName}`);
    return
}