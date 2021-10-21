const dc = require('discord.js')
const _insert = require('../DBComands/mongodb/insert');

/**
 * 
 * @param {dc.Message} msg 
 * @param {string[]} args 
 */

module.exports =  async function register(msg, args) {

    const guildName = msg.guild.name.replace(' ', ''); 
    let nickName;
    if(msg.mentions.members.size){
        if(!msg.member.permissions.has('MANAGE_ROLES')) {msg.channel.send('Permissions Error')} //Later change permissions to roles from config database
        const varUser = msg.mentions.members.first();

        if(args.length < 2){msg.channel.send(`You need to give in game name`); return;}
        nickName = args[1];
        await AddToDB(msg, guildName, varUser, nickName)
        return
    }
    else{
        if(args.length < 1){msg.channel.send(`You need to give in game name`); return;}
        nickName = args[0];
        await AddToDB(msg, guildName, msg.author, nickName);
        return;
    }
    
}


/**
 * 
 * @param {dc.Message} msg 
 * @param {string} guildName 
 * @param {dc.GuildMember} varUser 
 * @param {string} nickName 
 * @returns 
 */
async function AddToDB(msg, guildName, varUser, nickName){
    
    if(await _insert(guildName, 'nickname', varUser.id, nickName)){
                
        msg.channel.send(`Successfully registered <@${varUser.id}>`);
        await varUser.setNickname(nickName)
        return
    }
    else{
        msg.channel.send(`Error: Couldn't add user. Check if the user is not registered already`);
        return
    }
}