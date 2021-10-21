const dc = require('discord.js');
const _update = require('../mongodb/update');

/**
 * 
 * @param {dc.Message} msg 
 * @param {string[]} args 
 */
 module.exports = async function update(msg, args) {
    
    if(args.length > 3){
        msg.channel.send('Too many arguments!')
        return;
    }
    const guildName = msg.guild.name.replace(' ', '');
    const tableName = args[0];

    const varName = args[1];
    const newValue = args[2];

    console.log(`>${guildName} - Update Data`)
    console.log(`${varName}: ${newValue}`)

    await _update(guildName, tableName, varName, newValue);
    msg.channel.send(`Sccessfully changed ${tableName} of <@${varName}> to ${newValue}`);
}