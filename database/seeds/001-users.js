const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
  .then(function() {
    return knex('users').insert([
      {
        'username': 'hellen',
        'password': bcrypt.hashSync('hellen', 11),
      },
      {
        'username': 'eve',
        'password': bcrypt.hashSync('eve', 11),
      },
    ]);
  });
};
