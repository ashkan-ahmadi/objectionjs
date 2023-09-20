const env = require('../env.json')

module.exports = {
  client: 'pg',
  // debug: true,
  connection: env?.db?.development || {
    database: '',
    user: '',
    password: '',
    host: '',
    port: '',
  },
  pool: {
    /**
     * Dates always in UTC
     */
    afterCreate: function (connection, callback) {
      connection.query('SET timezone to "UTC";', function (err) {
        callback(err, connection)
      })
    },
  },
  log: {
    warn(message) {
      console.log('knexfile warn', message)
    },
    error(message) {
      console.log('knexfile error', message)
    },
    deprecate(message) {
      console.log('knexfile deprecate', message)
    },
    debug(message) {
      console.log('knexfile debug', message)
    },
  },
  seeds: {
    // they run alphabetically, unlike migrations
    directory: './seeds/dev', // default: './seeds/'
  },

  migrations: {
    tableName: 'knex_migrations',
  },
  // connection: 'postgres://sf:abc@localhost:5432/studentfy'
  // searchPath: ['knex', 'public'],
}
