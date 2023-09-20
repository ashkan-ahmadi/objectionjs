exports.up = async function (knex) {
  await knex.schema.createTable('order_statuses', function (table) {
    table.increments('id').primary() // Auto-incrementing primary key
    table.string('status').notNullable()
    table.timestamps(true, true) // Created_at and updated_at timestamps
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTable('order_statuses')
}
