const dc = require('discord.js')
const picktable = require('../../DBComands/mongodb/picktable');

/**
 * 
 * @param {dc.Message} msg 
 * @param {dc.GuildMember[]} captains
 * @returns
 */

module.exports = async function mapbansys(msg, captains) {
    //get all variables ready
    const cap1 = captains[0];
    const cap2 = captains[1];

    const table = await picktable(msg.guild.name, 'maps');

    //make embed message with map names
    let embed = new dc.MessageEmbed()
    .setTitle('Maps')
    .setDescription('Chose map you want to ban')
    
    for(let i = 1; i <table.length; i++){
        embed.addField(`${i}. ${table[i-1]['maps']}`, '');
    }

}







/**
 * After first command send list with all maps and number next to them
 * when someone click number emoji the map get stripped? __s__ < idk how you call it *shrug*
 * 
 */