const dc = require('discord.js')
const picktable = require('../DBComands/mongodb/picktable')

/**
 * 
 * @param {dc.Message} msg 
 * @param {string[]} args
 * @returns {string} map name 
 */

module.exports = async function mapGenerator(msg, args) {

    const guildName = 'IronsightPolska'//msg.guild.name.replace(' ', ''); 
    const y = await randomMapGeneretor(guildName);
    return y
}


async function randomMapGeneretor(guildName) {
    
    const table = await picktable(guildName, 'maps');
    const lastIndex = table.length

    const x = Math.floor(Math.random() * (lastIndex+1 - 1) + 1)
    const y = await table.find(  res =>  res['id'] == `${x}`);
    return y
}
