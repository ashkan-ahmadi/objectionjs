const setupDatabase = require('./db/setupDatabase')

setupDatabase()

const getUsers = require('./functions/getUsers')
const getUserById = require('./functions/getUserById')

const foo = async () => {
  const users = await getUserById(2)
  console.log(users)
}

foo()
