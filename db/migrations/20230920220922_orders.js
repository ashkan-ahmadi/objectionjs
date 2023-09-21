// Replace 'create_orders_table.js' with an appropriate name for your migration file
exports.up = async function (knex) {
  await knex.schema.createTable('orders', function (table) {
    // Auto-incrementing primary key
    table.increments('id').primary()

    // quantity of product
    table.integer('quantity', 10, 2).notNullable()

    // price of individual product
    // we store price in case the product price changes
    table.decimal('price', 10, 2).notNullable()

    // subtotal (quantity * individual price)
    table.decimal('subtotal', 10, 2).notNullable()

    // discount
    table.decimal('discount', 10, 2).notNullable().defaultTo(0)

    // Total order amount: subtotal - discount (up to 10 digits with 2 decimal places)
    table.decimal('total', 10, 2).notNullable()

    // date and time of order
    table.datetime('date').notNullable()

    // id of user who placed the order (default 0 in case it's a guest user)
    table.integer('user_id').unsigned().defaultTo(0).references('id').inTable('users')

    // id of product
    table.integer('product_id').unsigned().notNullable().references('id').inTable('products')

    // id of status of the order
    table.integer('status_id').unsigned().notNullable().references('id').inTable('order_statuses')

    // created_at and updated_at timestamps
    table.timestamps(true, true)
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('orders')
}
