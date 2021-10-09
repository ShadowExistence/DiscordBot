const dc = require('discord.js')


const ping = require('./Commands/ping.js')

const commands = {
    ping: ping,
}



/**
 * @param {dc.Message} msg 
 */
module.exports =  async function (msg) {
    
    if(!msgCheck(msg)) return;
    let args = msg.content.split(' ');
    args = args.filter(Boolean); 
    let command = args.shift(); 
    command = command.substring(1);
    

    if(msg.content.match('ping')){
        commands[command](msg, args)
    }

    
}

function msgCheck(msg){

    if(msg.author.bot) return false;
    if(msg.channel.type == 'DM') return false;
    if(!msg.content.startsWith('!')) return false;
    return true;
}

async function PermCheck(msg, perm) {
    const member = await msg.member
    
    if(member.permissions.has(perm)) return true;
    return false    
}
/**
 * 
 * @param {dc.Message} msg 
 * @param {dc.Permissions.FLAGS} perm - Permissions:
 * https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
 */


