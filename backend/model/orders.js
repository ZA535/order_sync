const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const table = sequelize.define("orders", {
    amount: {
      type: Sequelize.FLOAT
    },
    order_time: {
      type: Sequelize.DATE
    }
  });
  return table;
};
