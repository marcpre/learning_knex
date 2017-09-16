//Loading from an external file
const knex = require('knex')(require('../db/knexfile'))
const faker = require('faker')

async function main() {

    //test connection
    knex.raw('select 1+1 as result').then(function() {
        // there is a valid connection in the pool
    });


    await knex('posts').insert({ title: 'First Titel', description: 'Lorem ipsum dolor sit', deleted: false, createdAt: faker.date.recent, updatedAt: faker.date.recent })
    await knex('posts').insert({ title: 'Second Titel', description: 'Lorem ipsum dolor sit', deleted: false, createdAt: faker.date.recent, updatedAt: faker.date.recent })
    await knex('posts').insert({ title: 'Third Titel', description: 'Lorem ipsum dolor sit', deleted: false, createdAt: faker.date.recent, updatedAt: faker.date.recent })

}

main().then().catch(err => console.error(err))
