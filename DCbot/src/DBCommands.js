const dc = require('discord.js');
const insert = require('./dbCommands/insert');
const ctable = require('./dbCommands/tablecreate')
const showdb = require('./dbCommands/showdb')

const commands = {
    insert: insert,
    ctable:ctable,
    showdb:showdb

}

module.exports =  async function (msg) {
    if(!msgCheck(msg)) return;

    if(!PermCheck(msg,'ADMINISTRATOR')) {msg.reply('Permissions Error'); return;}
    // if(BotPermCheck(msg))
    let args = msg.content.split(' ');
    args = args.filter(Boolean); 
    let command = args.shift(); 
    command = command.substring(1);

    if(msg.content.match('insert')){
        commands[command](msg, args)
    }
    if(msg.content.match('ctable')){
        commands[command](msg, args)
    }
    if(msg.content.match('showdb')){
        commands[command](msg)
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