const path = require('path')
const fs = require('fs')
const knex = require('knex')({
    client: 'mysql',
    connection: {
        user: 'pisco',
        host: 'localhost',
        password: '',
        database: 'c9'
    }
})

async function main() {

    //test connection
    knex.raw('select 1+1 as result').then(function() {
        // there is a valid connection in the pool
    });

    // drop and create tables
    let res = await knex.raw(fs.readFileSync(path.join(__dirname, '../sql/t1-basics.sql'), 'utf8'))

    // insert row
    await knex('users').insert({ username: 'user1', age: 12 })
    await knex('users').insert({ username: 'user2', age: 12 })
    await knex('users').insert({ username: 'user3', age: 14 })

    // select one
    res = await knex('users').where({ age: 12, username: 'user1' }).first()
    console.log('one', res)

    // update
    await knex('users').where('username', 'user1').update('username', 'user1_u')

    // delete
    await knex('users').where('username', 'user3').delete()

    // select all
    res = await knex('users')
    console.log('all', res)

    knex.destroy()
}

main().then().catch(err => console.error(err))
