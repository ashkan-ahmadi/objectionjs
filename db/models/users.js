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
    const { Roles } = require('./roles')

    return {
      // Use this relation when the source model has the foreign key
      roles: {
        relation: Model.BelongsToOneRelation,
        modelClass: Roles,
        join: {
          from: 'users.roleId',
          to: 'roles.id',
        },
      },
    }
  }
}

module.exports = {
  Users,
}
