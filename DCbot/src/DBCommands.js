const dc = require('discord.js');


const commands = {
    

}

module.exports =  async function (msg) {
    if(!msgCheck(msg)) return;

    if(!PermCheck(msg,'ADMINISTRATOR')) {msg.reply('Permissions Error'); return;} //idea: For perms can create must have table with permissions for commandHandlers and
    // wouldn't show when using showdb()
    let args = msg.content.split(' ');
    args = args.filter(Boolean); 
    let command = args.shift(); 
    command = command.substring(1);
}

async function PermCheck(msg, perm) {
    const member = await msg.member
    
    if(member.permissions.has(perm)) return true;
    return false    
}