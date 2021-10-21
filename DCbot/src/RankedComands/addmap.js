const dc = require('discord.js')
const insert = require('../DBComands/mongodb/insert')
const update = require('../DBComands/mongodb/update')
const picktable = require('../DBComands/mongodb/picktable')
const findOne = require('../DBComands/mongodb/findone')

/**
 * 
 * @param {dc.Message} msg 
 * @param {string[]} args 
 */

module.exports =  async function addMap(msg, args) {

    const guildName = msg.guild.name.replace(' ', ''); 
    const tableName = 'maps'
    const mapName = args[0]
    //add map names to db >> Maybe make bot send map picture?
    if(args.length != 1) {msg.channel.send('Command format: =addmap <map name>')}
    const found = await findOne(guildName, tableName, 'name', mapName)
    if(found){
        msg.channel.send('This map already exists');
        return;
    }


    const lastId = (await picktable(guildName, tableName)).length+1 
    try{
        await insert(guildName, tableName, 'name', mapName)
        await update(guildName, tableName, 'add', 'name', mapName, 'id', lastId)
        
    }
    catch(e){
        msg.channel.send('Something went wrong');
        console.log(e);
        return
    }

    await msg.channel.send(`Successfully added new map ${mapName}`)
    return
    
}


// add function that checks for all the id's and look for empty one
// when found map with the same ids