exports.up = async function (knex) {
  await knex.schema.createTable('users', function (table) {
    // Auto-incrementing primary key
    table.increments('id').primary()

    // Unique email address
    table.string('email').notNullable().unique()

    // Password hash
    table.string('password').notNullable()

    // First name
    table.string('first_name')

    // Last name
    table.string('last_name')

    // User's active status (default: true)
    table.boolean('is_active').defaultTo(true)

    // Foreign key to link orders to users
    table.integer('role_id').unsigned().notNullable().references('id').inTable('roles')

    // created_at and updated_at timestamps
    table.timestamps(true, true)
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('users')
}
