const service = require('./t5_0-serviceLayer')
/**
 * TODO:
 * #running synchronous and asynch code together?
 */

function main() {

    //prepare data
    //service.prepareData()

    //getAll
    service.getAllPosts().then(data => {
        console.log(JSON.stringify(data))
    })

    //create
    service.create("Test post", "Test description").then(function (res) {
        console.log(res)
    })
    console.log("Post with " + id + ": " + service.findById(id))

    //get all Posts
    service.getAllPosts().then(function (res) {
        console.log("We have " + res.length + " posts.");
    });
    console.log("Result " + res)


}

main().then().catch(err => console.error(err))