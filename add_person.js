var argv = process.argv;
const settings = require("./settings"); // settings.json

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

knex('famous_people')
.insert({'first_name': argv[2],
        'last_name': argv[3],
        'birthdate': argv[4]
        })
.asCallback(function(err, rows) {
  if (err) {
    return console.error(err)
  }
  knex.select().from('famous_people')
    .asCallback(function(err, row) {
      console.log(row);
      knex.destroy(function(){
        console.log("Connection closed");
      });
    });
});
