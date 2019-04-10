var knex = require('knex')({
    client: 'pg',

    connection: {
        user: 'tzpnxusr',
        host: 'isilo.db.elephantsql.com',
        database: 'tzpnxusr',
        password: 'Bqf2GyfstFTKjHmfryyZuezOh85F8r6k',

    }
});


module.exports = knex