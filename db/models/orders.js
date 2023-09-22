'use strict'

const { Model } = require('objection')

class Orders extends Model {
  static get tableName() {
    return 'orders'
  }

  static get modifiers() {
    return {
      summary: builder => builder.select('*'),
    }
  }

  // Add datetime of now when inserting new row
  $beforeInsert() {
    this.createdAt = new Date()
  }

  // Add datetime of now when updating the row
  $beforeUpdate() {
    this.updatedAt = new Date()
  }

  static get quantityColumn() {
    return 'quantity'
  }

  static get priceColumn() {
    return 'price'
  }

  static get subtotalColumn() {
    return 'subtotal'
  }

  static get relationMappings() {
    const Users = require('./users')
    const Products = require('./products')
    const OrderStatuses = require('./orderStatuses')

    return {
      // Use this relation when the source model has the foreign key
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: Users,
        join: {
          from: 'orders.userId',
          to: 'users.id',
        },
      },
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: Products,
        join: {
          from: 'orders.productId',
          to: 'products.id',
        },
      },
      status: {
        relation: Model.BelongsToOneRelation,
        modelClass: OrderStatuses,
        join: {
          from: 'orders.statusId', // column name can be camelcase
          to: 'order_statuses.id', // table name has to be underscored
        },
      },
    }
  }
}

module.exports = Orders
