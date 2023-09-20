exports.seed = async function (knex) {
  // fake users built using https://www.mockaroo.com/
  const fakeUsers = [
    {
      email: 'lnaerup0@yelp.com',
      password: '$2a$04$ctPIsu7lC3d6m10lFaY.YO8xTazvnfABUAHD4NfbegspBP7yp6ccG',
      first_name: 'Levin',
      last_name: 'Naerup',
      is_active: false,
    },
    {
      email: 'dyaldren1@answers.com',
      password: '$2a$04$i7r6tkK7tJAyLsOZlFYAWue4P2h.nszR2ATfB9LZjYI9tqcSIfMOW',
      first_name: 'Deedee',
      last_name: 'Yaldren',
      is_active: false,
    },
    {
      email: 'vanfonsi2@diigo.com',
      password: '$2a$04$CebaWZ25QX/3HJ1Mx3PHqeKKo3IAT4erZDWjJ0g45ih1ibti1BzyW',
      first_name: 'Viviana',
      last_name: 'Anfonsi',
      is_active: false,
    },
    {
      email: 'dnorth3@hostgator.com',
      password: '$2a$04$HJUxmoxtRugH5UybclS8bODB698r/p6eiHZphmIDTUy0JHtSdLdvS',
      first_name: 'Derrek',
      last_name: 'North',
      is_active: true,
    },
    {
      email: 'valdred4@t-online.de',
      password: '$2a$04$v0ZpBIEQjIxD9QWidU5IEuAwM/o1MhuBEiCKgEnD26otfP7jp19Xy',
      first_name: 'Vinnie',
      last_name: 'Aldred',
      is_active: false,
    },
    {
      email: 'dslade5@t.co',
      password: '$2a$04$X/l0b9XgCF6B2ordjWBEzeIVirJ0slJafaqI60eAusNt.4Lqs5xMC',
      first_name: 'Darelle',
      last_name: 'Slade',
      is_active: false,
    },
    {
      email: 'wdewitt6@networkadvertising.org',
      password: '$2a$04$o.UhNgrOJQth6byu5mqrL.OvkBnsTqp1lAPR1n32npaUDU0JodAwa',
      first_name: 'Wynn',
      last_name: 'De Witt',
      is_active: false,
    },
    {
      email: 'mflann7@google.fr',
      password: '$2a$04$1EjwpVYzYhZ4dQ/Y2/yzH.6pMaVI9MpsgiiOG7NgerN5jJ6LrtxgW',
      first_name: 'Merna',
      last_name: 'Flann',
      is_active: false,
    },
    {
      email: 'ucurtain8@ed.gov',
      password: '$2a$04$lwPHJNjcuwj2PxRHI5eGy.0sl2/HU1lx0xby98fjJA/h9MpvYc0AG',
      first_name: 'Uta',
      last_name: 'Curtain',
      is_active: false,
    },
    {
      email: 'mdeavenell9@csmonitor.com',
      password: '$2a$04$Bg1TorkA7BbithtKfzVl4u5qYKkp/BNPwmfjpNWXHsIMQFP3weuvy',
      first_name: 'Moses',
      last_name: 'De Avenell',
      is_active: false,
    },
    {
      email: 'erochforda@theglobeandmail.com',
      password: '$2a$04$B45qvUZkjG3Ju742mva7t.HTG5fDusshba.B0kWUIc0Tu9aXFp7U.',
      first_name: 'Ezekiel',
      last_name: 'Rochford',
      is_active: false,
    },
    {
      email: 'gsealb@blogtalkradio.com',
      password: '$2a$04$4.Eup2SKh06jh5fJaLpFDe.KfdO5shrzy/6h6ZQ1dY8Kpalg3vZ4i',
      first_name: 'Gnni',
      last_name: 'Seal',
      is_active: true,
    },
    {
      email: 'astrassec@ow.ly',
      password: '$2a$04$gcvr9fXbDQkqfCoVxTOpQOErdRzlKgYxzInsWgHY7.EBQy/Zykpl.',
      first_name: 'Abdul',
      last_name: 'Strasse',
      is_active: false,
    },
    {
      email: 'yhugginsd@cmu.edu',
      password: '$2a$04$QYtm/1LqOFGzNrOgH6XnOe7mwyYwPU0pP44/yT1sNt5qYagwiyc7G',
      first_name: 'Yale',
      last_name: 'Huggins',
      is_active: true,
    },
    {
      email: 'wschmuhle@businessweek.com',
      password: '$2a$04$YDSX/FUNLf/qZ/GVxsPxf.0S.Wjzr18J.A/PIbNHplP4HROgEaKWO',
      first_name: 'Whitaker',
      last_name: 'Schmuhl',
      is_active: false,
    },
    {
      email: 'rmilburnf@ca.gov',
      password: '$2a$04$J/5GN3K5kGMqrpJCR0/QquS9YOMBo0uQNxKhIY9uU2ew.Pt1678su',
      first_name: 'Rex',
      last_name: 'Milburn',
      is_active: true,
    },
    {
      email: 'mcluseg@ocn.ne.jp',
      password: '$2a$04$OPZbZbbBqR8me5tjFSstYOtbh0o8DKboJ0H0/nGUOXdvvXpALcSae',
      first_name: 'Meris',
      last_name: 'Cluse',
      is_active: true,
    },
    {
      email: 'vjergerh@163.com',
      password: '$2a$04$QGjHMkP9wDg63YnC/HGkC.OVhi0RzvMSZwUV6VENgMnwP37bdpBeS',
      first_name: 'Viki',
      last_name: 'Jerger',
      is_active: false,
    },
    {
      email: 'lhaldini@google.it',
      password: '$2a$04$dcTmXo.hHmpEUSoN8LGjfOh7ob4hBre7BaEHo8NOolRuWVu/cZpnO',
      first_name: 'Lezlie',
      last_name: 'Haldin',
      is_active: false,
    },
    {
      email: 'gisenorj@dion.ne.jp',
      password: '$2a$04$rKhFs6xq6PFguOk9dxlxOeHmO9IID.5gvUr7ibbPk.xZIYCmQj1hq',
      first_name: 'Grace',
      last_name: 'Isenor',
      is_active: false,
    },
  ]

  await knex('users').del() // delete all rows
  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1') // reset sequence back to 1
  await knex('users').insert(fakeUsers)
}
