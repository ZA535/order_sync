const OrderF = require('./orders')

module.exports = (sequelize) => {
    let models = {}
    models.Order = OrderF(sequelize)
    return models; 
}