const setupDatabase = require('./db/setupDatabase')

setupDatabase()

//////////////////////////////////

const { getUser, updateUser } = require('./functions/users')
const Roles = require('./db/models/roles')
const Users = require('./db/models/users')
const Products = require('./db/models/products')

const foo = async () => {}

foo()
