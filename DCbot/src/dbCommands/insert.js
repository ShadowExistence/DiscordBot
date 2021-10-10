const MongoClient = require('mongodb').MongoClient;
const url = `mongodb://localhost:27017`;
const dc = require('discord.js')




/**
 * @typedef {string | keyVal[]}  argsStrings
 */

/**
 * 
 * @param {dc.Message} msg 
 * @param {argsStrings} object 
 */
module.exports = async function name(msg, args) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        let dbo = db.db(msg.guild.name.replace(' ', ''));
        let obj = {kill: 0}
        // for(let i = 1; i < args.lenght; i += 2){
            
        // }
        console.log(obj)
        dbo.collection(args[0]).insertOne(obj & {id:1}, function(err, res) { /// NEED  TO FIX THIS M8
          if (err) throw err;
          console.log("Noice, you inserted it");
          db.close();
        });
    });
}

