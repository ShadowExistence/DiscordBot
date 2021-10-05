
const fs = require('fs');

module.exports = class DataEditor{

    path = "";
   constructor(path = ""){
    this.path = path
   }

    IndexOfID(dataArray, ID){
        let output = false;
        for(let i = 0; i < dataArray.length; i++){
            if(dataArray[i].ID.includes(ID)){
                console.log(i);
                return i
            }
        }
        console.log(output);
        return output;
    }

    
    
    Path(){
        return this.path;
    }


    /**
     * @param {string} dbName 
     */
    
    CreateDB(dbName) {
        const arrayCreate = `{"profiles":[]}`
        
        fs.writeFileSync(`${this.path}/${dbName}.json`, arrayCreate, (err) => {
            if (err) {throw err;}
        });
        console.log("DataBase created");
        return 

    };
    
    /**
     * 
     * @param {string} dbName 
     * @returns {string | number} - path to DB or error
     */
    LookingForDb(dbName){
        var foundDB = false;
        fs.readdir(this.path, (err, files) => {
            files.forEach(Element => {
                console.log(Element + " " + dbName + '.json');
                if (Element === `${dbName}.json`) {
                    console.log("found db with the same name");
                    foundDB = true;
                    return;
                }
            });
        })
        console.log(foundDB)
        if(foundDB){
            console.log(`${this.path}/${dbName}.json`)
            return `${this.path}/${dbName}.json`
        }
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
        //const pathToDB = this.LookingForDb(dbName);  Need to fix method for this!
        // Further work without checking if db exists!

        let DBpath = `${this.path}/${dbName}.json`;

        let jsonData = JSON.parse(fs.readFileSync(DBpath));

        var dataArray = jsonData.profiles;

        if(this.IndexOfID(dataArray, id) == false){
            
            let newProfile = {ID: id, nickname: nickName};
            dataArray.push(newProfile)
            if(moreArgs){
                moreArgs().forEach((Element) =>{
    
                    if(Element.dataType === 'string'){newProfile[Element.varName] = ""}
                    if(Element.dataType === 'int'){newProfile[Element.varName] = 0}
                    if(Element.dataType === 'bool'){newProfile[Element.varName] = false}
                })
            }
            
    
            fs.writeFileSync(`${this.path}/${dbName}.json`, JSON.stringify(jsonData), err => {if (err) throw err;})
            console.log("Succesfly added new profile!");
            return
        }
        else{
            console.log("This profile already exists");
            return
        }
    }

    RemoveProfile(dbName, id){

        let DBpath = `${this.path}/${dbName}.json`;
        let jsonData = JSON.parse(fs.readFileSync(DBpath));
        var dataArray = jsonData.profiles;
        let x = this.IndexOfID(dataArray, id);
        if( typeof(x) == typeof(1)){
            dataArray.splice(x,1);
            console.log(dataArray);
            fs.writeFile(DBpath, JSON.stringify(jsonData), err => {if (err) throw err;})
            return;
        }
        else{
            console.log('Cant find this id');
        }
    }
}

