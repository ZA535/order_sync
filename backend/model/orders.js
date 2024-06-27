
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const table = sequelize.define("orders", {
      Amount: {
        type: Sequelize.FLOAT
      },
      order_time: {
        type: Sequelize.DATE
      },
      customer_name: {
        type: Sequelize.STRING
      },
      customer_email: {
        type: Sequelize.STRING
      },
      customer_phone: {
        type: Sequelize.STRING
      },
      note: {
        type: Sequelize.STRING
      }
    });  
    return table;
};