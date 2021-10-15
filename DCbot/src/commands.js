const dc = require('discord.js')


const ping = require('./Commands/ping.js')
const adminCommands = require('./adminCommands');
const DBCommands = require('./DBCommands');




/**
 * @param {dc.Message} msg 
 */
module.exports =  async function (msg) {
        
    try{

        msgCheck(msg)
        if(msg.content.startsWith('.')){
            DBCommands(msg)
            
        }
        if(msg.content.startsWith('=')){
            adminCommands(msg)
        }






    }
    catch(e){
        console.log(`>${msg.guild.name} - Error`);
        console.log(e);
    }
    
    

    
}

function msgCheck(msg){

    if(msg.author.bot) return false;
    if(msg.channel.type == 'DM') return false;
    if(!msg.content.startsWith('=') && !msg.content.startsWith('.')) {console.log('Failed check');return false;}
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


