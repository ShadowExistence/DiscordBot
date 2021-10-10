var MongoClient = require('mongodb').MongoClient;
var url = `mongodb://localhost:27017`;


MongoClient.connect(url, async function(err, db) {

    if (err) throw err;
    var dbo = await db.db(srvName);
            

});
