const ban = require('./Commands/ban')
const kick = require('./Commands/kick')
const purge = require('./commands/purge')

const commands = {
    ban: ban,
    kick: kick,
    purge: purge
}

module.exports =  async function (msg) {
    if(!msgCheck(msg)) return;

    if(!PermCheck(msg,'ADMINISTRATOR')) {msg.reply('Permissions Error'); return;}

    let args = msg.content.split(' ');
    args = args.filter(Boolean); 
    let command = args.shift(); 
    command = command.substring(1);
    

    if(msg.content.match('ban')){
        commands[command](msg, args);
    }

    if(msg.content.match('kick')){
        commands[command](msg, args);
    }

    if(msg.content.match('purge')){
        commands[command](msg, args);
    }
}

async function PermCheck(msg, perm) {
    const member = await msg.member
    
    if(member.permissions.has(perm)) return true;
    return false    
}

function msgCheck(msg){

    if(msg.author.bot) return false;
    if(msg.channel.type == 'DM') return false;
    if(!msg.content.startsWith('!')) return false;
    return true;
}