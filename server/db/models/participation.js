const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Participation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Event, User }) {
      this.belongsTo(Event, { foreignKey: 'eventID' });
      this.belongsTo(User, { foreignKey: 'userID' });
    }
  }
  Participation.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    eventID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Participation',
  });
  return Participation;
};
