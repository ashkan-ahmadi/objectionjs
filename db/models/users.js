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

  // Add datetime of now when inserting new row
  $beforeInsert() {
    this.createdAt = new Date()
  }

  // Add datetime of now when updating the row
  $beforeUpdate() {
    this.updatedAt = new Date()
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

module.exports = Users
