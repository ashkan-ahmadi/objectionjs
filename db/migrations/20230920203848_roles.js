exports.up = async function (knex) {
  await knex.schema.createTable('roles', function (table) {
    // Auto-incrementing primary key
    table.increments('id').primary()

    // role column with name (e.g. admin, user)
    table.string('role').notNullable()

    // created_at and updated_at timestamps
    table.timestamps(true, true)
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('roles')
}
