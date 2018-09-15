module.exports = 
{
    port: 3000 || process.env.PORT,
    db:{
        username: process.env.USERNAME,
        pass: process.env.PASS,
        dbname: process.env.DBNAME,
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