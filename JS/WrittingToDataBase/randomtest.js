
function StringObject (varName, dataType){
    this.varName = varName
    this.dataType = dataType
}


CreateNewProfile('ShadowExistence', '1232131', () =>{
    return [
        new StringObject('kills', 'int'),
        new StringObject('deads', 'int')
    ]
});

function CreateNewProfile(nickname, id, moreArgs){

    console.log(nickname)
    console.log(id),
    moreArgs().forEach(Element =>{
        console.log(Element.varName);
        console.log(Element.dataType);
    });
}

