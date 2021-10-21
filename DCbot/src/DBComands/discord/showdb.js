const dc = require('discord.js');
const _showdb = require('../mongodb/showdb');

/**
 * @param {dc.Message} msg 
 * @returns {void}
 */
module.exports = async  function showdb(msg) {

    const guildName = 'IronsightPolska'//msg.guild.name.replace(' ', '');    
    const tables = await _showdb(guildName)

    let string = `\`\`\`\n` 
    tables.forEach(table =>{
        string += `${table.name}\n`
    })
    string += `\`\`\``

    await msg.channel.send(string);
}
