const { Model } = require('objection')

class Order extends Model {
  static get tableName() {
    return 'orders'
  }

  $beforeInsert() {
    this.createdat = new Date()
  }

  $beforeUpdate() {
    this.updatedat = new Date()
  }

  static get totalColumn() {
    return 'total'
  }

  static get customerIdColumn() {
    return 'customer_id'
  }

  static get productIdColumn() {
    return 'product_id'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['total', 'customer_id', 'product_id'],
      properties: {
        id: { type: 'integer' },
        total: { type: 'number' },
        customer_id: { type: 'integer' },
        product_id: { type: 'integer' },
        createdat: { type: 'string' },
        updatedat: { type: 'string' },
      },
    }
  }
}

module.exports = Order
