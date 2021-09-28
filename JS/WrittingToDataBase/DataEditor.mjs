import * as fs from 'fs';

class DataEditor{

    
    DataEditor(){
        
    }

    IndexOfID(dbName, id){
        const pathToDB = this.LookingForDb(dbName);

        var jsonData = JSON.parse(fs.readFileSync(file));
        var dataArray = jsonData.profiles;
    
        for(let i = 0; i < jsonData.profiles.length; i++){
            if(dataArray[i].ID.includes(ID)){
                return i
            }
        }
        return -1;
    } // Need to finish this!!!!!

    LookingForDb(dbName){
        fs.readdir('./DataBase', 'utf-8', (err, files) =>{
            if(err) throw err;
            files.forEach(Element =>{
                if(Element === dbName){
                    console.log(`Found db with name ${Element}`);
                    return `./DataBase/${Element}.json`;
                }
                return -1; //Maybe call CreateDB() if the db doesn't exist yet?
            })
        })
    };
    
    CreateDB(dbName, path = 'DataBase') {
        const arrayCreate = `{"${dbName}":[]}`
        fs.writeFileSync(`./${path}/${dbName}.json`, arrayCreate,function (err) {
            if (err) {
                console.log(err);
                return -1;
            };
        });
    };

    CreateProfile(dbName, nickName, id, moreArgs){
        const pathToDB = this.LookingForDb(dbName);

        if(pathToDB == -1){
            return -1;
        }

        if(IndexOfID(id) == -1){
            var jsonData = JSON.parse(fs.readFileSync(file));
            var dataArray = jsonData.profiles;

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

const dataedit = new DataEditor();

dataedit.CreateProfile('kills',)