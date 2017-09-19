// Update with your config settings.

module.exports = {
/*
  development: {
    client: 'postgresql',
    connection: {
      user: 'root',
      host: 'localhost',
      password: 'root',
      database: 'knexdb'
    }
  },
*/  

  development: {
    client: 'mysql',
    connection: {
      user: 'pisco',
      host: 'localhost',
      password: '',
      database: 'knexdb'
    }
  },


  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
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