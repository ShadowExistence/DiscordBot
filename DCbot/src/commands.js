const dc = require('discord.js')

const adminCommands = require('./adminCommands');
const DBCommands = require('./DBCommands');
const rankedCommands = require('./RankedComands/rankedCommandsHandler')



/**
 * @param {dc.Message} msg 
 */
module.exports =  async function (msg) {
        
    msgCheck(msg)
    if(msg.content.startsWith('.')){
        DBCommands(msg)
        
    }
    if(msg.content.startsWith('=')){
        adminCommands(msg)
        rankedCommands(msg)
    }

      
}

function msgCheck(msg){

    if(msg.author.bot) return false;
    if(msg.channel.type == 'DM') return false;
    if(!msg.content.startsWith('=') && !msg.content.startsWith('.')) {return false;}
    return true;
}


/**
 * 
 * @param {dc.Message} msg 
 * @param {dc.Permissions.FLAGS} perm - Permissions:
 * https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
 */


