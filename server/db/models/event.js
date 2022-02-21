const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Category, Participation }) {
      this.belongsTo(User, { foreignKey: 'userID' });
      this.belongsTo(Category, { foreignKey: 'categoryID' });
      this.hasMany(Participation, { foreignKey: 'eventID' });
    }
  }
  Event.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    privateSettings: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dateTime: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
