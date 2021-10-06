const fs = require('fs');

/**
 * @param {string} nickName
 */

module.exports = function NameControl(dbName, nickName) {
    let nameLenght = false;
    let nameExists = false;

    if(nickName.length < 3 || nickName.length > 20){
        return '1';
    }
    if(lookingForName(dbName, nickName)){return '2';};
    return true;
    
}

function lookingForName(dbName, nickName) {

    let jsonData = JSON.parse(fs.readFileSync(`./DataBase/${dbName}`));
    let dataArray = jsonData.profiles;
    if(dataArray.find(Element => {
        if (Element.nickname === nickName){
            return true
        }
    })){
        return true;
    }

    return false;
}