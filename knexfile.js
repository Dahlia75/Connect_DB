// Update with your config settings.
const settings = require("./settings"); // settings.json

// var knex = require('knex')({
//   client: 'pg',
//   connection: {
//     host : settings.hostname,
//     user : settings.user,
//     password : settings.password,
//     database : settings.database
//   }
// });

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : settings.hostname,
      user : settings.user,
      password : settings.password,
      database : settings.database
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
//   //     max: 10
//   //   },

//     migrations: {
//       tableName: 'knex_migrations'
//     }


// };
