const setupDatabase = require('./db/setupDatabase')

setupDatabase()

//////////////////////////////////

const { getUser, updateUser } = require('./functions/users')
const Roles = require('./db/models/roles')
const Users = require('./db/models/users')
const Products = require('./db/models/products')
const Orders = require('./db/models/orders')
const OrderStatuses = require('./db/models/orderStatuses')

const foo = async () => {
  const orders = await Orders.query().withGraphFetched('product').withGraphFetched('user').withGraphFetched('status').where({ userId: 1 })

  //  not sure why this returns false
  if (!(orders instanceof Orders)) {
    console.log('NOT')
  } else {
    console.log('all good')
  }

  console.log(orders)
}

foo()
