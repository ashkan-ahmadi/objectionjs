// Replace 'create_orders_table.js' with an appropriate name for your migration file
exports.up = async function (knex) {
  await knex.schema.createTable('orders', function (table) {
    table.increments('id').primary() // Auto-incrementing primary key
    table.integer('quantity', 10, 2).notNullable() // quantity of product
    table.decimal('price', 10, 2).notNullable() // price of individual product
    table.decimal('subtotal', 10, 2).notNullable() // subtotal (quantity * individual price)
    table.decimal('total', 10, 2).notNullable() // Total order amount (up to 10 digits with 2 decimal places)
    table.integer('user_id').unsigned().notNullable() // Foreign key to link orders to users
    table.integer('product_id').unsigned().notNullable() // Foreign key to link orders to products
    table.integer('status_id').unsigned().notNullable() // Foreign key to link orders to order_statuses
    table.timestamps(true, true) // Created_at and updated_at timestamps

    // Define a foreign key constraint to link orders to users
    table.foreign('user_id').references('id').inTable('users')
    table.foreign('product_id').references('id').inTable('products')
    table.foreign('status_id').references('id').inTable('order_statuses')
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTable('orders')
}
