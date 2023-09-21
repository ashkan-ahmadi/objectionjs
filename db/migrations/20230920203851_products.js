exports.up = async function (knex) {
  await knex.schema.createTable('products', function (table) {
    // Auto-incrementing primary key
    table.increments('id').primary()

    // Product name
    table.string('name').notNullable()

    // Product description
    table.text('description')

    // Product price (up to 10 digits with 2 decimal places)
    table.decimal('price', 10, 2).notNullable()

    // Stock quantity (default: null -> unlimited stock)
    table.integer('stock_quantity').defaultTo(null)

    // Availability status (default: true)
    table.boolean('is_available').notNullable().defaultTo(true)

    // Link product to users
    table.integer('user_id').unsigned().notNullable().references('id').inTable('users')

    // created_at and updated_at timestamps
    table.timestamps(true, true)
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('products')
}
