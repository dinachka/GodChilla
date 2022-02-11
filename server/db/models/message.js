'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.hasOne(User, { foreignKey: 'id' });
      this.hasOne(User, { foreignKey: 'id' });
    }
  }
  Message.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      fromUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      toUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Message',
    }
  );
  return Message;
};
