const dc = require('discord.js');
const register = require('./register')
const mapGenerator = require('./mapchooser');
const addmap = require('./addmap');
const showmaps = require('./showmaps');
const test = require('../test')

const commands = {
   register: register,
   maprol: mapGenerator,
   addmap: addmap,
   showmaps: showmaps,
   test: test
}

module.exports =  async function (msg) {

    
    let args = msg.content.split(' ');
    args = args.filter(Boolean);
    let command = args.shift(); 
    command = command.substring(1);
    

    if(msg.content.match('register')){
        commands[command](msg, args);
    }
    if(msg.content.match('maprol')){
        commands[command](msg, args);
    }
    if(msg.content.match('addmap')){
        commands[command](msg, args);
    }
    if(msg.content.match('showmaps')){
        commands[command](msg, args);
    }
    if(msg.content.match('test')){
        commands[command](msg, args);
    }
   
    
}

async function PermCheck(msg, perm) {

    const member = await msg.member
    if(member.permissions.has(perm)) return true;
    return false    
}
