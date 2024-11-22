const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Department = require("./department");

const Person = sequelize.define(
  "Person",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    departmentId: {
      type: DataTypes.INTEGER,
      references: {
        model: Department,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);

Person.belongsTo(Department, { foreignKey: "departmentId" });
Department.hasMany(Person, { foreignKey: "departmentId" });

module.exports = Person;
