const env = require('../env.json')
const { knexSnakeCaseMappers } = require('objection')

module.exports = {
  development: {
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
      directory: env?.db?.seedsDir || './seeds/dev',
    },

    migrations: {
      tableName: 'knex_migrations',
    },

    // converting snake_case to camelCase automatically
    // https://vincit.github.io/objection.js/recipes/snake-case-to-camel-case-conversion.html
    ...knexSnakeCaseMappers(),

    // connection: 'postgres://sf:abc@localhost:5432/studentfy'
    // searchPath: ['knex', 'public'],
  },
  staging: {
    client: 'pg',
    // debug: true,
    connection: env?.db?.staging || {
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
      directory: env?.db?.staging?.seeds_dir || './seeds/staging',
    },

    migrations: {
      tableName: 'knex_migrations', // DEFAULT: knex_migrations
    },
    // connection: 'postgres://sf:abc@localhost:5432/studentfy'
    // searchPath: ['knex', 'public'],
  },
  production: {
    client: 'pg',
    // debug: true,
    connection: env?.db?.production || {
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
      directory: env?.db?.production?.seeds_dir || './seeds/production',
    },

    migrations: {
      tableName: 'knex_migrations', // DEFAULT: knex_migrations
    },
    // connection: 'postgres://sf:abc@localhost:5432/studentfy'
    // searchPath: ['knex', 'public'],
  },
}
