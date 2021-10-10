const dc = require('discord.js')

/**
 * @typedef {[dc.User | string | dc.MessageMentions]}  argsStrings
 */

/**
 * @param {dc.Message} msg 
 * @param {argsStrings} args 
 */


module.exports = async function (msg, args) {
    
    if(!args) return;
    if(!msg.mentions.users.first()){msg.reply(`Coulnd't find user > ${args[0]}`); return;}
    if(!args[1].includes('add') && !args[1].includes('del')) {msg.reply('Use "add" or "del"!'); console.log(args[1]); return;}

    let member = msg.mentions.members.first();
    let memberRoles = member.roles.cache;
    let rolesToAdd = [];
    
    for(let i = 2; i < args.length; i++){

        if(args[i].includes('@')){
            rolesToAdd = msg.mentions.roles;
            break;
        }
        else{
            let roleName = args[i]
            //check if guild has this role
            let y = msg.guild.roles.cache.find(role => role.name === roleName)
            if(!y) {msg.reply(`Can't find role with this name.`); return;}
            rolesToAdd.push(y)
        }
    }   

    try{
        if(args[1].includes('add')){
            //check if member has this role
            if(args[2].includes('@')){
                let x = memberRoles.some(role => role === rolesToAdd.get(role.id))
                if(x){msg.reply(`<@${member.id}> already has this role!`); return;}
            }
            else{
                //check if member has this role
                let found = false;
                rolesToAdd.forEach( Element => {
                    let x = memberRoles.some(role => role === Element)
                    if(x) {msg.reply(`<@${member.id}> already has this role!`); found = true; return;}
                })
                if(found) return;
            }
           

            await member.roles.add(rolesToAdd)
            msg.reply(`Role successfully added to <@${member.id}>!`)
        }
        else if(args[1].includes('del')) {
            await member.roles.remove(rolesToAdd)
            msg.reply('Role successfully removed!')
        }
    }
    catch(e){
        msg.reply('Something went wrong > Contact ShadowExistence#1230')
    }

    return
}