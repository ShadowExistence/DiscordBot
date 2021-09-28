import {Client, Intents, MessageEmbed} from 'discord.js';
import * as fs from 'fs';


const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
        
    ]
});



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('messageCreate', (message) => {

    if(message.content == 'ping'){
        message.reply('pong');
    }
});

 client.on('messageCreate', async (message) =>  {

    if(message.content == 'embed'){

        const msg = new MessageEmbed()
        .setTitle("Title")
        .setDescription("Description")
        .setColor('RED')

        const newmessage = await message.reply({
            embeds: [msg]
        })

        await new Promise(resolve => setTimeout(resolve, 3000))

        const newEmbed = newmessage.embeds[0]
        newEmbed.setTitle("Edited title bitch :D")

        newmessage.edit({
            embeds: [newEmbed]
        })

    }
});

client.on('messageCreate', (message) =>  {
    
    if(message.content.match('!register')){
        var name = message.content.replace('!register', '');
        const userID = message.author;
        const textFile = './DataBase/Names.txt';

        console.log("Made to the serach");

        

        if(msg.length <= 20 ){
            
            fs.writeFile(textFile, message.author.id + " " + msg + "\n", {flag: "a"}, err => {});
            message.reply("You've been successfuly registered __" + msg +"__");
        }

    }

});

fs.readFile('./token.txt', (err,data) => {
    client.login(data.toString());
});