
const MongoClient = require('mongodb').MongoClient;
const dc = require('discord.js')
const url = `mongodb://localhost:27017`;

/**
 * @param {dc.Message} msg 
 * @param {string | number | Document} args 
 */
module.exports = async function (msg, args){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        let dbo = db.db(msg.guild.name.replace(' ', ''));
        
        dbo.createCollection(args[0], (err) => {if(err) throw err;});
        dbo.createIndex(args[0], {id: 1}, {unique: true}, (err) =>{
            if (err) throw err;
            console.log('Created new table')
            msg.reply('Created new table');
        })
        
    });
}
