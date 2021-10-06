const fs = require('fs');
const DataEditor = require('./src/DataEditor.js');

const editor = new DataEditor();



let test = {
    name: 'Kkk',
    age: 12
}

let array = []
test.ss = 'sd'


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

function LookingForDb(dbName){
    
    let found = false;
    fs.readdir(`./DataBase`,(err, files) => {
        if(err){console.log(err); return false}
        console.log(files.length)
        
        for(let i = 0; files.length; i++){
            
            if(files[i] == dbName){
                console.log('found file with the same name');
                found = true;
                return;
            }
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

