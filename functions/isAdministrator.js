function isAdministrator(user) {
  return user?.roles?.id === 1 || user?.roles?.role === 'Administrator'
}

module.exports = { isAdministrator }
