'use strict'

const { Model } = require('objection')

class Users extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'users'
  }

  static get modifiers() {
    return {
      summary: builder => builder.select('*'),
    }
  }

  static get relationMappings() {
    /**
     * Required here to avoid require loops ( Circular dependency ).
     * https://vincit.github.io/objection.js/#relations
     */

    return {}
  }
}

module.exports = {
  Users,
}
