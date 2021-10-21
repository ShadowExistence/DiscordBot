const dc = require('discord.js');
const select = require('../mongodb/select')



/**
 * 
 * @param {dc.Message} msg 
 * @param {string[]} args 
 */
module.exports = async function selectByID(msg, args) {
    
    if(args.length > 2){
        msg.channel.send('Too many arguments!')
        return;
    }
    const guildName = msg.guild.name.replace(' ', '');
    const tableName = args[0];

    const x = await select(guildName, tableName, args[1])
    let string = `\`\`\`\n
"${args[1]}": ${x[args[1]]}\`\`\`
    `
    
    msg.channel.send(string)
}