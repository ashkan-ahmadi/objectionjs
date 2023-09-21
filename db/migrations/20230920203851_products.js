exports.up = async function (knex) {
  await knex.schema.createTable('products', function (table) {
    table.increments('id').primary() // Auto-incrementing primary key
    table.string('name').notNullable() // Product name
    table.text('description') // Product description
    table.decimal('price', 10, 2).notNullable() // Product price (up to 10 digits with 2 decimal places)
    table.integer('stock_quantity').notNullable().defaultTo(0) // Stock quantity (default: 0)
    table.boolean('is_available').notNullable().defaultTo(true) // Availability status (default: true)
    table.integer('user_id').unsigned().notNullable() // Foreign key to link orders to users
    table.timestamps(true, true) // Created_at and updated_at timestamps

    table.foreign('user_id').references('id').inTable('users')
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTable('products')
}
