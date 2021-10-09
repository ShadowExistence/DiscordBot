const dc = require('discord.js')

/**
 * 
 * @param {dc.Message} msg 
 * @param {string[]} args 
 */
module.exports =  async function (msg, args) {
  const memberToBan = msg.mentions.members.first()
  if(msg.author == memberToBan.user || memberToBan.user.bot) {msg.reply(`Why would you even try it?`); return;}
  if(!memberToBan.bannable) {msg.reply('Permissions Error: Member can not be banned'); return;}

  for(let i = 3; i < args.length; i++){
    args[2] += ` ${args[i]}`
  }
  if(args.length > 1){
    msg.reply(`Banned ${memberToBan} ${args[1]} days for ${args[2]} `)
    await memberToBan.ban((args[0], args[1]));
    return
  }

  msg.reply(`Banned ${memberToBan}`)
  await memberToBan.ban((args[0], args[1]));
  return
  
}