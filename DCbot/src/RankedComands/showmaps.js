const dc = require('discord.js')
const picktable = require('../DBComands/mongodb/picktable')
/**
 * 
 * @param {dc.Message} msg 
 * @param {string[]} args 
 */

module.exports =  async function showmaps(msg) {

    const guildName = msg.guild.name.replace(' ', ''); 
    const tableName = 'maps';
    //Set moderator role for rankeds
    const maps = picktable(guildName, tableName);
    let string = '\`\`\`\n';
    (await maps).forEach(obj => string += `${obj.name}\n`)
    string += '\`\`\`'
    msg.channel.send(string)
    return;
}