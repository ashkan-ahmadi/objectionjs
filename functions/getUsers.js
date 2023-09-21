const { Users } = require('../db/models/users')

async function getUsers() {
  return await Users.query()
}

module.exports = getUsers
