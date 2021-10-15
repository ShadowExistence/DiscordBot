const dc = require('discord.js')
const fs = require('fs')

const commandHandler = require('./src/commands')
const adminCommands = require('./src/adminCommands');
const DBCommands = require('./src/DBCommands');


const bot = new dc.Client({
    intents: [
        dc.Intents.FLAGS.GUILDS,
        dc.Intents.FLAGS.GUILD_MESSAGES,
        dc.Intents.FLAGS.GUILD_MEMBERS,
        dc.Intents.FLAGS.GUILD_BANS,
        dc.Intents.FLAGS.DIRECT_MESSAGES
    ]
});


bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});


//CommonCommands
bot.on('messageCreate', commandHandler);
    
//AdminCommands
bot.on('messageCreate', adminCommands)

//DataBaseCommands
bot.on('messageCreate', DBCommands)


fs.readFile('./token.txt', (err,data) => {
    bot.login(data.toString());
});


// TODO
    
    //  type with embed
    //  create vc when joned specific channel
    //  Send notify about new yt video
    //  Voting > Specific channel
    //  chaning name with score > ranked another file ** Connection with db