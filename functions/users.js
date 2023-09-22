const Users = require('../db/models/users')

async function getUsers() {
  return await Users.query()
}

async function getUser(userId) {
  return await Users.query().where({
    id: userId,
  })
}

async function updateUser(userId, obj = {}) {
  return await Users.query().findById(userId).patch(obj)
}

function isAdministrator(user) {
  return user?.roles?.id === 1 || user?.roles?.role === 'Administrator'
}

module.exports = { getUser, updateUser, updateUser, isAdministrator }
