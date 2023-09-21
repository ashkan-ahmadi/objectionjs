const knex = require('knex')
const knexfile = require('./knexfile')
const { Model } = require('objection')
const env = require('../env.json')

function setupDatabase() {
  let db
  if (env?.mode === 'development' || process.env.NODE_ENV === 'development') {
    db = knex(knexfile.development)
  } else if (env?.mode === 'staging' || process.env.NODE_ENV === 'staging') {
    db = knex(knexfile.staging)
  } else if (env?.mode === 'production' || process.env.NODE_ENV === 'production') {
    db = knex(knexfile.production)
  }

  // Connect Objection to Knex
  Model.knex(db)
  return db
}

module.exports = setupDatabase
