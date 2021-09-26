const fs = require('fs');
const file = './DataBase/DataBasetest.json';



function StringObject (varName, dataType){
    this.varName = varName
    this.dataType = dataType
}


/**
 * Returns index of specific id that is inside an array
 *  @param {string} ID - Discord User ID
 */

function IndexOfID(ID){
    var jsonData = JSON.parse(fs.readFileSync(file));
    var dataArray = jsonData.profiles;

    for(let i = 0; i < jsonData.profiles.length; i++){
        if(dataArray[i].ID.includes(ID)){
            return i
        }
    }
    return -1;
}



CreateNewProfile('ShadowExistence', '1232131', () =>{
    return [
        new StringObject('kills', 'int'),
        new StringObject('deads', 'int')
    ]
});

/**
 * @typedef StringObject
 * @type {object}
 * @property {string} varName
 * @property {string} dataType - string, int or bool
 */

/**
 * @param {string} nickName 
 * @param {string} id - Discord User ID
 * @param {StringObject[]} moreArgs - List of variables you want to add to the profile;
 */

function CreateNewProfile(nickName, id, moreArgs) {
    var jsonData = JSON.parse(fs.readFileSync(file));
    var dataArray = jsonData.profiles;

    if(IndexOfID(id) == -1){
        let newProfile = {ID: id, nickname: nickName};
        dataArray.push(newProfile)
        moreArgs().forEach((Element) =>{

            if(Element.dataType === 'string'){newProfile[Element.varName] = ""}
            if(Element.dataType === 'int'){newProfile[Element.varName] = 0}
            if(Element.dataType === 'bool'){newProfile[Element.varName] = false}
        })

        fs.writeFileSync(file, JSON.stringify(jsonData), err => {if (err) throw err;})
        return
    }
    else{
        console.log("This profile already exists");
        return
    }
}

/**
 * @param {string} varName
 * @param {string|number} varValue
 * @param {string} flag - There are 3 flags:
 * 
 * 'add' => Add a variable to all objects in JSON or one specific if ID is added.
 * 
 * 'remove' => Remove a variable from all objects in JSON or one specific if ID is added.
 * 
 * 'edit' => Edit specific variable value. ID needed!
 * 'edit+' => Changes variable value of all objects. No ID needed.
 * 
 * @param {string} id - Discord User ID.
 */

function DataEditior(varName, varValue, flag = 'add', id = 0){
    var jsonData = JSON.parse(fs.readFileSync(file));
    var dataArray = jsonData.profiles;

    //Adding Variable To All objects => flag = add
    //Has build-in checking if the varName already exists

    if (flag == 'add'){
        if(id == 0){
            for(let i = 0; i < dataArray.length; i++){
                let propArray = Object.getOwnPropertyNames(dataArray[i])
        
                if(!propArray.includes(varName)){
                    dataArray[i][`${varName}`] = varValue;
                    console.log(`Added '${varName}': ${varValue} to ${dataArray[i].ID}:${dataArray[i].nickname}`)
                }
            }
            console.log("Every other object already has this variable");
            fs.writeFileSync(file, JSON.stringify(jsonData), err => {if (err) throw err;})
            return
        }
        else{
            if(IndexOfID(id) != -1){

                let propArray = Object.getOwnPropertyNames(dataArray[x])
                if(!propArray.includes(varName)){
                    dataArray[x][varName] = varValue;
                    console.log(`Added '${varName}': ${varValue} to ${dataArray[x].ID}:${dataArray[x].nickname}`);
                }
                else{
                    console.log(`\nThis variable already exists!`);
                    console.log(`if you wish to change it use 'flag' = 'edit'\n`);
                    return
                }
            }
        } 
    }
    if (flag == 'remove'){
        if(id == 0){

            //Need to implement remove flag


        }
    }
}





