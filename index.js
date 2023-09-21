/* KNEX & OBJECTION */
const knex = require('./db/knex')
const { Model } = require('objection')
Model.knex(knex)
/* KNEX & OBJECTION  */

const getUsers = require('./functions/getUsers')
const getUserById = require('./functions/getUserById')

const foo = async () => {
  // const users = await getUserById(2)
  // console.log(users)
}

foo()
