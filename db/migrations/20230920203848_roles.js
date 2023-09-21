exports.up = async function (knex) {
  await knex.schema.createTable('roles', function (table) {
    table.increments('id').primary()
    table.string('role').notNullable()
    table.timestamps(true, true) // Created_at and updated_at timestamps
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTable('roles')
}
