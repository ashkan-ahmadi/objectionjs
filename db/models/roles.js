'use strict'

const { Model } = require('objection')

class Roles extends Model {
  static get tableName() {
    return 'roles'
  }

  static get relationMappings() {
    return {}
  }
}

module.exports = {
  Roles,
}
