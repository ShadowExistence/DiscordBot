const ban = require('./Commands/ban');
const kick = require('./Commands/kick');
const purge = require('./Commands/purge');
const role = require('./Commands/role');
const test = require('./Commands/test');
const dc = require('discord.js');


const commands = {
    ban: ban,
    kick: kick,
    purge: purge,
    role: role,
    test: test,

}

module.exports =  async function (msg) {
    //if(!msgCheck(msg)) return;
    
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
    if(msg.content.match('role')){
        commands[command](msg, args)
    }
    if(msg.content.match('test')){
        commands[command](msg, args)
    }
    
}

async function PermCheck(msg, perm) {

    const member = await msg.member
    if(member.permissions.has(perm)) return true;
    return false    
}

