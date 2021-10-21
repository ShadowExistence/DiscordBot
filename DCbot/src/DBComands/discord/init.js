const dc = require('discord.js');
const _init = require('../mongodb/init')



/**
 * 
 * @param {dc.Message} msg 
 * @param {string[]} args 
 */
module.exports =  async function insert(msg, args) {

    const guildName = msg.guild.name.replace(' ', ''); 
    try{
      await _init();  
    }
    catch{
        msg.channel.send(`Coudln't prepare the databases`)
    }
    
}