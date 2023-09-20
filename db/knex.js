const { Knex } = require('knex')
const { Model } = require('objection')

const config = require('./knexfile')

const knex = Knex(config)

// Give the knex instance to Objection
Model.knex(knex)

module.exports = knex
