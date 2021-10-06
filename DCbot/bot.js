"use strict";
exports.__esModule = true;
var discord_js_1 = require("discord.js");
var fs = require("fs");
var DataEditor = require('./src/DataEditor.js');
var NameControl = require("./src/NameControl.js");
var editor = new DataEditor();
var bot = new discord_js_1.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
        discord_js_1.Intents.FLAGS.GUILD_MEMBERS
    ]
});
bot.on('ready', function () {
    console.log("Logged in as " + bot.user.tag + "!");
});
// changing data in register.json
bot.on('messageCreate', function (message) {
    var msg = message;
    if (msg.author.bot) {
        return;
    }
    if (msg.channel.type === 'DM') {
        return;
    }
    if (!msg.member.permissions.has('ADMINISTRATOR', true)) {
        msg.reply('Admin perms required.');
        return;
    }
    if (msg.content.startsWith('!')) {
        if (msg.content.match('ping')) {
            msg.reply('pong');
            return;
        }
        if (msg.content.match('create db')) {
            var dbName = msg.content.replace('!create db', '').trim();
            if (editor.CreateDB(dbName)) {
                msg.reply("Database: **" + dbName + "** successfully created.");
                return;
            }
            msg.reply("Couldn't make database >> Contact bot creator!");
            return;
        }
        if (msg.content.match('register')) {
            var name_1 = msg.content.replace('!register', '').trim();
            var userID = msg.author.id;
            var x = NameControl('register.json', name_1);
            if (x === true) {
                if (editor.CreateProfile('register.json', name_1, userID)) {
                    msg.reply("You've been successfully registered **" + name_1 + "**!");
                    return;
                }
                else {
                    msg.reply('User with this id already exists!');
                    return;
                }
            }
            if (x === '1') {
                msg.reply('Name must be between 3 and 20 charachters!');
                return;
            }
            if (x === '2') {
                msg.reply("User with this nickname: **" + name_1 + "** already exists.");
                return;
            }
            msg.reply('Something went wrong >> Contact bot creater!');
            return;
        }
    }
});
fs.readFile('./token.txt', function (err, data) {
    bot.login(data.toString());
});
