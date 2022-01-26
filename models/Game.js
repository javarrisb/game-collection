const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    list_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'list',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    unserscored: true,
    modelName: 'game'
  }
);

module.exports = Game;