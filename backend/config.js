module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '20196513',
    DB: 'ordersync',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
  