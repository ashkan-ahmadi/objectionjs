'use strict'

const { Model } = require('objection')

class OrderStatuses extends Model {
  static get tableName() {
    return 'order_statuses' // table name has to be underscored
  }

  static get relationMappings() {
    return {}
  }
}

module.exports = OrderStatuses
