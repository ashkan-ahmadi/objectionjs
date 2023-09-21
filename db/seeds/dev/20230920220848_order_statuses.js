exports.seed = async function (knex) {
  const data = [{ status: 'Pending Payment' }, { status: 'Processing' }, { status: 'Completed' }, { status: 'Canceled' }, { status: 'Failed' }, { status: 'Refunded' }, { status: 'On Hold' }, { status: 'Shipped' }, { status: 'Delivered' }]

  await knex('order_statuses').del() // delete all rows
  await knex.raw('ALTER SEQUENCE order_statuses_id_seq RESTART WITH 1') // reset sequence back to 1
  await knex('order_statuses').insert(data)
}
