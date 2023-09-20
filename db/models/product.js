const { Model } = require('objection')

class Product extends Model {
  static get tableName() {
    return 'products'
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

  static get priceColumn() {
    return 'price'
  }

  // it makes it specific what info you have to pass
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'price'], // when you insert, you HAVE TO include name and email. you can't skip one
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        price: { type: 'integer' },
        createdat: { type: 'string' },
        updatedat: { type: 'string' },
      },
    }
  }

  static relationMappings = {}
}

module.exports = Product
