//Loading from an external file
var knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: 'knexdb',
        user:     'root',
        password: 'root'
      },
    debug: false,
})
// using faker
const faker = require('faker')

async function main() {

    //test connection
    await knex.raw('select 1+1 as result').then(function () {
        console.log("valid db connection")
        // there is a valid connection in the pool
    });

    //delete data
    await knex('posts').del().then(function () {
        const res = knex('posts')
        if (res) {
            console.log("Table content deleted")
        } else {
            console.log(res)
        }
    })

    const dataAmount = 3
    console.log("lets insert " + dataAmount + " rows of data")
    for (var index = 0; index < dataAmount; index++) {
        try {
            await knex('posts').insert({
                title: faker.random.word(),
                description: faker.lorem.paragraph(),
                deleted: faker.random.boolean(),
                createdAt: faker.date.recent(),
                updatedAt: faker.date.recent()
            })
        } catch (e) {
            console.log(e)
        }
    }

    // select all
    res = await knex('posts')
    console.log('All: ', res)

}

main() //.then().catch(err => console.error(err))