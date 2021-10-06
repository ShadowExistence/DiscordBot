import {Client, Guild, Intents, MessageEmbed} from 'discord.js';
import * as fs from 'fs';
const DataEditor = require('./src/DataEditor.js');
import * as NameControl from './src/NameControl.js'

const editor = new DataEditor();

const bot = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
        
    ]
});



bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

// changing data in register.json
bot.on('messageCreate', (message) => {
    let msg = message;
    
    if(msg.author.bot){return;}
    if(msg.channel.type === 'DM'){return;}
    if(!msg.member.permissions.has('ADMINISTRATOR', true)){msg.reply('Admin perms required.'); return;}
    if(msg.content.startsWith('!')){

        if(msg.content.match('ping')){
            msg.reply('pong');
            return
        }

        if(msg.content.match('create db')){
            let dbName = msg.content.replace('!create db', '').trim();
            
            if(editor.CreateDB(dbName)){
                msg.reply(`Database: **${dbName}** successfully created.`);
                return;
            }
            msg.reply(`Couldn't make database >> Contact bot creator!`)
            return
        }
    
        if(msg.content.match('register')){
            const name = msg.content.replace('!register', '').trim();
            const userID = msg.author.id;
    
            let x = NameControl('register.json', name);
            if(x === true){
                if(editor.CreateProfile('register.json', name, userID)){
                
                    msg.reply(`You've been successfully registered **${name}**!`)
                    return;
                }
                else{
                    msg.reply('User with this id already exists!')
                    return;
                }
            }
            if (x === '1') {
                msg.reply('Name must be between 3 and 20 charachters!')
                return;
            } 
            if(x === '2'){
                msg.reply(`User with this nickname: **${name}** already exists.`)
                return;
            }
            msg.reply('Something went wrong >> Contact bot creater!');
            return;
        }
    }
    

});



fs.readFile('./token.txt', (err,data) => {
    bot.login(data.toString());
});
