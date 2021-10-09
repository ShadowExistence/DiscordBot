import fs from 'fs-extra'
import {DataEditor} from './src/DataEditor.mjs'

const editor = new DataEditor();



function lookingForName(dbName, nickName) {

    let jsonData = JSON.parse(fs.readFileSync(`./DataBase/${dbName}`));
    let dataArray = jsonData.profiles;
    if(dataArray.find(Element => {
        if (Element.ndataType ==e){
            return true
        }
    })){
        return true;
    }

    
    return false;
}

/**
 * @param {string} dbName 
 * @param {string} varName 
 * @param {string | number | boolean} value
 */
function AddVar(dbName, varName, value, ID = 0){
    let DBpath = `./DataBase/${dbName}`;
    let jsonData = JSON.parse(fs.readFileSync(DBpath));
    var dataArray = jsonData.profiles;

    if(ID === 0 ){
        for(let i = 0; i < dataArray.length; i++){
            if(typeof(value) == 'string'){ dataArray[i][varName] = value }
            if(typeof(value) == 'boolean') { dataArray[i][varName] = value }
            if(typeof(value) == 'number') { dataArray[i][varName] = value }
        }
    }
    else{
        
        let x = editor.IndexOfID(dataArray, '196947435401117696')

        if(typeof(x) == 'number'){
            dataArray[x][varName] = value;

        }   

    }
    
    fs.writeFile(DBpath, JSON.stringify(jsonData), err => {if (err) return false;})
    

    return true;
}

async function LookingForDb(dbName){
    let found = false;
    
    await fs.pathExists(`./DataBase/${dbName}`, (err,exists) =>{
        if(err) throw err;
        if(exists){
            console.log("found db")
            found = true;
        }
    })

    if(found){
        console.log(`./DataBase/${dbName}`)
        return `./DataBase/${dbName}`
    }
    console.log(found)
    return found;
}
//AddVar('test.json', 'realname', 'Koxik', '196947435401117696')

LookingForDb('test.json')

