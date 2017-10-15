const { exec } = require('child_process');
var knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: 'knexdb',
        user:     'root',
        password: 'root'
      },
    debug: false,
})

async function main() {

    //test connection
    knex.raw('select 1+1 as result').then(function() {
        console.log("Here is a valid connection in the pool")
    });

    //prepare table
    knex.del().then(function(){
        console.log("Table prepared")
    })
    
    knex.raw('DELETE FROM easyPosts').then(function() {
        console.log("Table prepared")
    })

    // drop and create tables
    //easy post table was created
    exec('knex migrate:latest', (err, stdout, stderr) => {
        if (err) {
            console.log(err)
            return;
        }
    });

    // insert row
    await knex('easyPosts').insert({ title: 'First Titel', description: 'Lorem ipsum dolor sit', deleted: false })
    await knex('easyPosts').insert({ title: 'Second Titel', description: 'Lorem ipsum dolor sit', deleted: false })
    await knex('easyPosts').insert({ title: 'Third Titel', description: 'My description', deleted: true })

    // select one
    var res = await knex('easyPosts').where({ deleted: true }).first()
    console.log('one', res)

    // update
    await knex('easyPosts').where('title', 'First Titel').update('title', 'Titel Updated')

    // delete
    await knex('easyPosts').where('deleted', true).delete()

    // select all
    res = await knex('easyPosts') 
    console.log('all', res)

    knex.destroy()
}

//TODO then has not to be used
main().then().catch(err => console.error(err))