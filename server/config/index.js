module.exports = 
{
    port: process.env.PORT || 3000,
    db:{
        username:  "postgres",
        pass:  "postgres",
        dbname:  "chatDB",
        dbconf:{
            host: process.env.DBHOST || "localhost",
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