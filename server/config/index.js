module.exports = 
{
    port: 3000 || process.env.PORT,
    db:{
        username:"postgres" || process.env.USERNAME,
        pass:"postgres" || process.env.PASS,
        dbname: "chatDB" || process.env.DBNAME,
        dbconf:{
            host: 'localhost',
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