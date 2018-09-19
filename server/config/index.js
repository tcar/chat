module.exports = 
{
    port: process.env.PORT || 3000,
    db:{
        username: process.env.USERNAME || "postgres",
        pass: process.env.PASS || "postgres",
        dbname:  process.env.DBNAME || "chatDB",
        dbconf:{
            host: process.env.DBHOST,
            dialect: 'postgres',
          
            pool: {
              max: 5,
              min: 0,
              acquire: 30000,
              idle: 10000
            },
          
          }
    }
}