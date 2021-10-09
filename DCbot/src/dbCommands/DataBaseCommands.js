const db = require('mariadb')

module.exports =  class dbCommands{
    constructor(srvName){
        const pool = db.createPool({
            host: 'localhost',
            user: 'root',
            password: '123',
            database: srvName
        });
    }
    
    
    // const pool = Connector('IronSight');
    
    
    /**
     * @typedef JsonString 
     * @property {string} name
     * @property {string} datatype
     * 
     * @param {string} dbname 
     * @param {JsonString} args 
     */
    async CreateDB(dbname, args = '0'){
        var conn = await pool.getConnection()
        let ls = await conn.query(`CREATE TABLE ${dbname} (id int not null auto_increment primary key)`);
    
        if(args != '0'){
            args.forEach(async Element => {
                if(Element.datatype == 'string'){
                    conn = await conn.query(`ALTER TABLE ${dbname} ADD ${Element.name} VARCHAR(255) DEFAULT ""`);
                }
                if(Element.datatype == 'number'){
                    await conn.query(`ALTER TABLE ${dbname} ADD ${Element.name} INT DEFAULT 0`);
                }
                if(Element.datatype == 'bool'){
                    await conn.query(`ALTER TABLE ${dbname} ADD ${Element.name} BOOL DEFAULT false`);
                }
                
            });
        }
        await conn.end();
        await pool.end();
    }
    
    async ShowTables(params) {
        var conn = await pool.getConnection()
        let ls = await conn.query(`SHOW TABLES`);
    
        await conn.end();
        await pool.end();
    }
}




