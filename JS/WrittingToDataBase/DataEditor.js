const fs = require('fs');

module.exports = class DataEditor{

    constructor(){
        this.path = './DataBase'
    }

    Path(){
        return this.path;
    }

    IndexOfID(dataArray, ID){
        for(let i = 0; i < dataArray.length; i++){
            if(dataArray[i].ID.includes(ID)){
                return i
            }
        }
        return false;
    }

    

    /**
     * @param {string} dbName 
     */
    
    CreateDB(dbName) {
        const arrayCreate = `{"profiles":[]}`
        
        fs.writeFileSync(`${this.path}/${dbName}`, arrayCreate, (err) => {
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
                console.log(Element + " " + dbName);
                if (Element === `${dbName}`) {
                    console.log("found db with the same name");
                    foundDB = true;
                    return;
                }
            });
        })
        console.log(foundDB)
        if(foundDB){
            console.log(`${this.path}/${dbName}`)
            return `${this.path}/${dbName}`
        }
        return 2;
    }

    /**
     * ..
     * @param {string} dbName
     * @param {string} nickName 
     * @param {string} id 
     * @param {string[]} moreArgs 
     * @returns 
     */
    CreateProfile(dbName, nickName, id, moreArgs = 0){
        //const pathToDB = this.LookingForDb(dbName);  Need to fix method for this!
        // Further work without checking if db exists!
    
        let DBpath = `${this.path}/${dbName}`;

        let jsonData = JSON.parse(fs.readFileSync(DBpath));

        var dataArray = jsonData.profiles;

        
        if(this.IndexOfID(dataArray, id) === false){
            let newProfile = {ID: id, nickname: nickName};
            dataArray.push(newProfile)
            if(moreArgs != 0){
                moreArgs().forEach((Element) =>{
    
                    if(Element.dataType === 'string'){newProfile[Element.varName] = ""}
                    if(Element.dataType === 'int'){newProfile[Element.varName] = 0}
                    if(Element.dataType === 'bool'){newProfile[Element.varName] = false}
                })
            }
            
    
            fs.writeFileSync(`${this.path}/${dbName}`, JSON.stringify(jsonData), err => {if (err) throw err;})
            console.log("Successfully added new profile!");
            return true;
        }
        else{
            console.log("This profile already exists");
            return false;
        }
    }

    RemoveProfile(dbName, id){
        let DBpath = `${this.path}/${dbName}.json`;
        let jsonData = JSON.parse(fs.readFileSync(DBpath));
        var dataArray = jsonData.profiles;
        let x = this.IndexOfID(dataArray, id);
        if( typeof(x) == typeof(1)){

            console.log('Successfully deleted profile of ' + JSON.stringify(dataArray[x]));

            dataArray.splice(x,1);
            fs.writeFile(DBpath, JSON.stringify(jsonData), err => {if (err) throw err;})
            return;
        }
        else{
            console.log('Cant find this id');
        }
    }
}

