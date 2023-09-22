'use strict'

const { Model } = require('objection')

class Products extends Model {
  static get tableName() {
    return 'products'
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

  static get nameColumn() {
    return 'name'
  }

  static get descriptionColumn() {
    return 'description'
  }

  static get priceColumn() {
    return 'price'
  }

  // it makes it specific what info you have to pass
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'price', 'userId'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        description: { type: 'string' },
        price: { type: 'number' },
        stockQuantity: { type: 'integer' },
        isAvailable: { type: 'boolean' },
        userId: { type: 'number' },

        createdAt: { type: 'string' },
        updatedAt: { type: 'string' },
      },
    }
  }

  static relationMappings = {}
}

module.exports = Products
