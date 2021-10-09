const dc = require('discord.js')

/**
 * 
 * @param {dc.Message} msg 
 * @param {string[]} args 
 */
module.exports =  async function (msg, args) {
  const memberToKick = msg.mentions.members.first()
  if(msg.author == memberToKick.user || memberToKick.user.bot) {msg.reply(`Why would you even try it?`); return;}
  if(!memberToKick.kickable) {msg.reply('Permissions Error: Member can not be kicked'); return;}


  for(let i = 2; i < args.length; i++){
    args[1] += ` ${args[i]}`
  }
  if(args.length > 1){
    msg.reply(`Kicked ${memberToKick} for ${args[2]} `)
    await memberToKick.kick((args[0], args[1]));
    return
  }

  msg.reply(`Kicked ${memberToKick}`)
  await memberToKick.kick((args[0], args[1]));
  return
  
}