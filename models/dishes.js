'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dishes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dishes.init({
    dishname: DataTypes.STRING,
    categoy_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dishes',
  });
  return Dishes;
};