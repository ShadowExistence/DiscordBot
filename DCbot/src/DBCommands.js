const dc = require('discord.js');
const insert = require('./DBComands/discord/insert')
const select = require('./DBComands/discord/select')
const showdb = require('./DBComands/discord/showdb')
const createtb = require('./DBComands/discord/tablecreate')
const update = require('./DBComands/discord/update')


const commands = {
    
    insert: insert,
    select: select,
    showdb: showdb,
    createtb: createtb,
    update: update,

}


/**
 * 
 * @param {dc.Message} msg 
 * @returns 
 */
module.exports =  async function (msg) {

    if(!PermCheck(msg,'ADMINISTRATOR')) {msg.reply('Permissions Error'); return;} //idea: For perms can create must have table with permissions for commandHandlers and
    // wouldn't show when using showdb()

    let args = msg.content.split(' ');
    args = args.filter(Boolean); 
    let command = args.shift(); 
    command = command.substring(1);

    if(msg.content.match('insert')){
        commands[command](msg, args);
    }
    if(msg.content.match('select')){
        commands[command](msg, args);
    }
    if(msg.content.match('showdb')){
        commands[command](msg);
    }
    if(msg.content.match('createtb')){
        commands[command](msg, args);
    }
    if(msg.content.match('update')){
        commands[command](msg, args);
    }
    if(msg.content.match('init')){
        commands[command](msg);
    }
}

async function PermCheck(msg, perm) {
    const member = await msg.member
    
    if(member.permissions.has(perm)) return true;
    return false    
}