const { Model } = require('objection')
const Order = require('./order')

class Customer extends Model {
  static get tableName() {
    return 'customers'
  }

  $beforeInsert() {
    this.createdat = new Date()
  }

  $beforeUpdate() {
    this.updatedat = new Date()
  }

  static get nameColumn() {
    return 'name'
  }

  static get emailColumn() {
    return 'email'
  }

  // it makes it specific what info you have to pass
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'email'], // when you insert, you HAVE TO include name and email. you can't skip one
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        email: { type: 'string' },
        createdat: { type: 'string' },
        updatedat: { type: 'string' },
      },
    }
  }

  static relationMappings = {
    order: {
      relation: Model.HasOneRelation, // one order can be related to one customer
      modelClass: Order,
      join: {
        from: 'customers.id',
        to: 'orders.customer_id',
      },
    },
  }
}

module.exports = Customer
