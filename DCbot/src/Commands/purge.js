const dc = require('discord.js')
const ms = require('ms')

/**
 * 
 * @param {dc.Message} msg 
 * @param {number | string} args 
 * number for amount to purge and -f to clear also pinned messages
 */
module.exports = async function (msg, args) {
    
    if (msg.channel.type === 'DM') return;
    if(args[0] > 100) {msg.reply('You can purge max. 100 messages!'); return;}
    const msgs = await msg.channel.messages.fetch({limit: (parseInt(args[0]))});
    
    const deletable = msgs.filter(async (msg) => (msg.createdTimestamp - Date.now()) < ms('14d') && !msg.pinned);

    await msg.delete();
    try{
        await msg.channel.bulkDelete(deletable)
    }
    catch(e){
        return
    }
    return
}