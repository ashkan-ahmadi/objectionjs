exports.up = async function (knex) {
  await knex.schema.createTable('order_statuses', function (table) {
    // Auto-incrementing primary key
    table.increments('id').primary()

    // Status column with names of statuses (e.g. pending, completed, failed)
    table.string('status').notNullable()

    // created_at and updated_at timestamps
    table.timestamps(true, true)
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('order_statuses')
}
