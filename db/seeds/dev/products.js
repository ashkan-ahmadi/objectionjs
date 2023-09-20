exports.seed = async function (knex) {
  // fake products built using https://www.mockaroo.com/
  const fakeProducts = [
    {
      name: 'Apple iPhone 14 Pro',
      description: 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
      price: 474.47,
      stock_quantity: 545,
      is_available: false,
    },
    {
      name: 'Samsung S23 Ultra',
      description: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
      price: 466.52,
      stock_quantity: 224,
      is_available: false,
    },
    {
      name: 'Oppo A2 Pro',
      description: 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
      price: 458.0,
      stock_quantity: 377,
      is_available: false,
    },
    {
      name: 'Apple iPhone X',
      description: 'Aliquam sit amet diam in magna bibendum imperdiet.',
      price: 496.98,
      stock_quantity: 816,
      is_available: true,
    },
    {
      name: 'OnePlus 11',
      description: 'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
      price: 476.97,
      stock_quantity: 21,
      is_available: false,
    },
    {
      name: 'Motorola Edge 40 Neo',
      description: 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
      price: 482.44,
      stock_quantity: 528,
      is_available: true,
    },
    {
      name: 'Huawei Mate 20 Pro',
      description: 'Morbi non quam nec dui luctus rutrum. Nulla tellus.',
      price: 460.86,
      stock_quantity: 513,
      is_available: false,
    },
    {
      name: 'Nokia 1100',
      description: 'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
      price: 389.95,
      stock_quantity: 386,
      is_available: true,
    },
    {
      name: 'LG KP100',
      description: 'Aliquam non mauris.',
      price: 450.34,
      stock_quantity: 719,
      is_available: true,
    },
    {
      name: 'Sony Ericsson K750',
      description: 'Cras pellentesque volutpat dui.',
      price: 424.77,
      stock_quantity: 391,
      is_available: true,
    },
  ]

  await knex('products').del() // delete all rows
  await knex.raw('ALTER SEQUENCE products_id_seq RESTART WITH 1') // reset sequence back to 1
  await knex('products').insert(fakeProducts)
}
