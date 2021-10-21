const dc = require('discord.js');


/**
 * 
 * @param {dc.Message} msg 
 * @param {dc.GuildMemberp[]}
 */
module.exports = async function test(msg, captains) {
    const cap1 = captains[0];
    const cap2 = captains[1];

    const table = [{
            name:'Tokyo'
        },{
            name:'Barca'
        },{
            name:'Bureau'
        }
    ]
    let embed = await new dc.MessageEmbed()
    .setTitle('Map Bans')
    const numConvert = {
        0:'1️⃣',1:'2️⃣',2:'3️⃣',3:'4️⃣',4:'5️⃣',5:'6️⃣',6:'7️⃣',7:'8️⃣',8:'9️⃣',9:'🔟',}

    for(let i = 0; i <table.length; i++){
        embed.addField(`${numConvert[i]} ${table[i]['name']}`, '---------------');
    }
    
    const botmsg = await msg.channel.send({embeds: [embed]});

    for(let i = 0; i <table.length; i++){
        await botmsg.react(`${numConvert[i]}`);
    }

    const filter = (reaction, captain)
    await botmsg.awaitReactions({filter, max:1, time: 60000, errors: ['time']})
    .then(collected => {
		const reaction = collected.first();

		for(let i = 0; i < table.length; i++){
            if(reaction.emoji.name === `${numConvert[i]}`){
                // need to work further...
                // need to add filter to await Reactionse and
                // when player react with number
                //https://discordjs.guide/popular-topics/reactions.html#removing-reactions-by-user
            }
        }
    }

    
}