const dc = require('discord.js')
const _insert = require('../DBComands/mongodb/insert')
/**
 * 
 * @param {dc.Message} msg 
 * @param {string[]} args 
 */

module.exports =  async function register(msg, args) {

    const guildName = msg.guild.name.replace(' ', ''); 
    const tableName = 'roles';
    //Set moderator role for rankeds
    if(args.length < 1) {msg.channel.send('You need to mention a role!'); return;}
    const roleMention = msg.mentions.roles.first();
    await _insert(guildName, tableName, 'name', roleMention.name);
    return;
}