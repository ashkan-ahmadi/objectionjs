const setupDatabase = require('./db/setupDatabase')

setupDatabase()

//////////////////////////////////

// const getUsers = require('./functions/getUsers')
// const getUserById = require('./functions/getUserById')
const { Roles } = require('./db/models/roles')
const { Users } = require('./db/models/users')
const { isAdministrator } = require('./functions/isAdministrator')

const foo = async () => {
  const user = await Users.query().findById(2).withGraphFetched('roles')
}

foo()
