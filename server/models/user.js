'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type:DataTypes.TEXT,
      allowNull: false
      },
    lat: {
      type: DataTypes.INTEGER,
      unique: true
    },
    long: {
      type: DataTypes.INTEGER,
      unique: true
    }
  },    {
    freezeTableName: true,
    underscored: true,
    tableName: "users",
})

  return User
}