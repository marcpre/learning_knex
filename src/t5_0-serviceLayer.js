//Loading from an external file
const {
    exec
} = require('child_process');
const config = require('../db/knexfile');
const env = 'development';
const knex = require('knex')(config[env]);
// using faker
const faker = require('faker')

/**
 * Run Seed for the db
 */
function prepareData() {

    exec('knex seed:run', (err, stdout, stderr) => {
        if (err) {
            console.log(err)
            return;
        }

        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });

}

/**
 * Return all posts
 */
function getAllPosts() {
    return knex('posts').select().then(data => {
        return data
    })
}


/**
 * Create a post
 */
function create(title, description) {
    console.log("Titel: " + title + " Description: " + description)
    return knex('posts')
        .insert({
            title: title,
            description: description,
            deleted: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }, 'id')
        .then(id => {
            console.log("Inserted post with id " + id)
            return id;
        })
        .catch((err) => console.log(err));
}

/**
 * delete a post by a certain id
 */
function deleteById(id) {
    return knex('posts').select().where('id', id).del().catch((err) => console.log(err));
}

/**
 * update a post by id
 */
function update(id, title, description) {
    knex('posts').select().where('id', id).update({
        title: title, 
        description: description
    }).catch((err) => console.log(err));
}

/**
 * find a post by id
 */
function findById(id) {
    knex('posts').select().where('id', id).first().then(data => {
        return data
    }).catch((err) => console.log(err));
}

module.exports = {
    prepareData,
    create,
    update,
    deleteById,
    getAllPosts,
    findById
}