//Loading from an external file
const config = require('../db/knexfile');
const env = 'development';
const knex = require('knex')(config[env]);
// using faker
const faker = require('faker')

function main() {

    //test connection
    knex.raw('select 1+1 as result').then(function () {
        // there is a valid connection in the pool
    });

    knex('posts').del().then(function () {
        const res = knex('posts')
        if (res) {
            console.log("Table content deleted")
        } else {
            console.log(res)
        }
    })
}

main()//.then().catch(err => console.error(err))