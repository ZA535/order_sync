const Sequelize = require('sequelize');
const dbConfig = require('../config')
const initModels = require('../model/initModels')
module.exports = connectToDB = () => {
  const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
      host: dbConfig.HOST,
      dialect: dbConfig.dialect,
      pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
      },
    }
  );

  const db = {
  };
  db.sequelize = sequelize;
  db.models = initModels(sequelize)
  db.sequelize.sync();
  return db;
};
