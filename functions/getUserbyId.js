const { Users } = require('../db/models/users')

async function getUserById(id) {
  return await Users.query().where({
    id: id,
  })
}

module.exports = getUserById
