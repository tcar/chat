'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      unique:true
    }, 
    ip:{
      type:DataTypes.TEXT,
      unique:true      
    },
    username: {
      type:DataTypes.TEXT,
      },
  },    {
    freezeTableName: true,
    underscored: true,
    tableName: "users",
})

  return User
}