const { sequelize } = require("../../config/config-db");
const { DataTypes } = require("sequelize");

const jobs = sequelize.define(
  "jobs",
  {
    job_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    job_title: {
      type: DataTypes.STRING(31),
      allowNull: true
    },
    min_salary: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    max_salary: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  },
  {
    sequelize,
    tableName: 'jobs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "jobs_pkey",
        unique: true,
        fields: [
          { name: "job_id" },
        ]
      },
    ]
}
);

module.exports = jobs;