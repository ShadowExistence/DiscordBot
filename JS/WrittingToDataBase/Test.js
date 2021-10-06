const DataEditor = require('./DataEditor.js');
const fs = require('fs');


const test = new DataEditor('./DataBase');

//test.CreateDB('Test');

test.CreateProfile('Test.json', 'ShadowExistence', '444');

// test.RemoveProfile('Test', '444');


