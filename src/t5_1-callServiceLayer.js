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
    try {
    const id = service.create("Test post", "Test description")
    console.log("Post with " + id + ": " + service.findById(id))
} catch(err) {
    console.log(err)
}

    //get all Posts
    service.getAllPosts().then(function (res) {
        console.log("We have " + res.length + " posts.");
    });

}

main().then().catch(err => console.error(err))