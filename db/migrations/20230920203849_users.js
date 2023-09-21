exports.up = async function (knex) {
  await knex.schema.createTable('users', function (table) {
    table.increments('id').primary() // Auto-incrementing primary key
    table.string('email').notNullable().unique() // Unique email address
    table.string('password').notNullable() // Password hash
    table.string('first_name') // First name
    table.string('last_name') // Last name
    table.boolean('is_active').defaultTo(true) // User's active status (default: true)
    table.integer('role_id').unsigned().notNullable() // Foreign key to link orders to users
    table.timestamps(true, true) // Created_at and updated_at timestamps

    table.foreign('role_id').references('id').inTable('roles')
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('users')
}
