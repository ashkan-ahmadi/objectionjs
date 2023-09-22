const setupDatabase = require('./db/setupDatabase')

setupDatabase()

//////////////////////////////////

const { getUser, updateUser } = require('./functions/users')
const Roles = require('./db/models/roles')
const Users = require('./db/models/users')
const Products = require('./db/models/products')
const Orders = require('./db/models/orders')

const foo = async () => {
  const p = await Orders.query().findById(1).withGraphFetched('product').withGraphFetched('user')
  console.log(p)
}

foo()
