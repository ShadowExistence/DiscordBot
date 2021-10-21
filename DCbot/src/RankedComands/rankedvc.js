const dc = require('discord.js')


/**
 * 
 * @param {dc.Message} msg 
 * @param {string[]} args 
 */

module.exports =  async function register(msg, args) {

    const guildName = msg.guild.name.replace(' ', ''); 
    
    // add voice chats that are made for rankeds
}