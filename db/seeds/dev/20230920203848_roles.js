exports.seed = async function (knex) {
  const data = [{ role: 'Administrator' }, { role: 'Editor' }, { role: 'Contributor' }, { role: 'Customer' }]

  await knex('roles').del() // delete all rows
  await knex.raw('ALTER SEQUENCE roles_id_seq RESTART WITH 1') // reset sequence back to 1
  await knex('roles').insert(data)
}
