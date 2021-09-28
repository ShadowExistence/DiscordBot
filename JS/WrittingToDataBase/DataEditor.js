const { BADNAME } = require('dns');
const fs = require('fs');
const { type } = require('os');

module.exports = class DataEditor{

   constructor(){

   }

    IndexOfID(dataArray, id){

        var dataArray = jsonData.profiles;
    
        for(let i = 0; i < jsonData.profiles.length; i++){
            if(dataArray[i].id.includes(id)){
                return i
            }
        }
        return -1;
    } // Need to finish this!!!!!

    
    
            


    /**
     * @param {string} dbName 
     * @param {string} path 
     */
    
    CreateDB(dbName, path = 'DataBase') {
        const arrayCreate = `{"${dbName}":[]}`
        const x = this.LookingForDb(dbName);
        console.log(x);
        if(x == 2){
            
            fs.writeFileSync(`./${path}/${dbName}.json`, arrayCreate,function (err) {
                if (err) {throw err;}
            });
            console.log("DataBase created");
            return 
        }
        console.log(x);
        console.log("Database with this name already exists");
        
    };
    
    /**
     * 
     * @param {string} dbName 
     * @param {string} path 
     * @returns {string | number} - path to DB or error
     */
    LookingForDb(dbName, path = './DataBase/'){
        var x = "";
        fs.readdir(path,(err,files) => {
            files.forEach(Element =>{
                console.log(Element + " " + dbName);
                if(Element === `${dbName}.json`){
                    console.log("found db with the same name");
                    console.log('first return')
                    x = `./${path}/${dbName}.json`
                    return;
                }
            })
            console.log('after return;')
            return x;
        })
        
        console.log('after 2ndreturn;')
        return 2;
    }

    /**
     * ..
     * @param dbName 
     * @param nickName 
     * @param id 
     * @param moreArgs 
     * @returns 
     */
    CreateProfile(dbName, nickName, id, moreArgs){
        const pathToDB = this.LookingForDb(dbName);

        if(pathToDB == -2){
            return -2;
        }

        var jsonData = JSON.parse(fs.readFileSync(pathToDB));
        var dataArray = jsonData.profiles;
        if(this.IndexOfID(dataArray, id) == -1){
            

            let newProfile = {ID: id, nickname: nickName};
            dataArray.push(newProfile)
            moreArgs().forEach((Element) =>{
    
                if(Element.dataType === 'string'){newProfile[Element.varName] = ""}
                if(Element.dataType === 'int'){newProfile[Element.varName] = 0}
                if(Element.dataType === 'bool'){newProfile[Element.varName] = false}
            })
    
            fs.writeFileSync(pathToDB, JSON.stringify(jsonData), err => {if (err) throw err;})
            console.log("Succesfly added new profile!");
            return
        }
        else{
            console.log("This profile already exists");
            return
        }
    }
}