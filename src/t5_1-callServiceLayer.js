const service = require('./t5_0-serviceLayer')
/**
 * TODO:
 * #running synchronous and asynch code together?
 */

async function main() {

    //prepare data
    //service.prepareData()

    //getAll
    service.getAllPosts().then(data => {
        console.log(JSON.stringify(data))
    })

    //create
    try {
        const id = await service.create("Test post", "Test description")
        console.log("Post with " + id + ": " + service.findById(id))
    } catch (err) {
        console.log(err)
    }

    //get all Posts
    service.getAllPosts().then(function (res) {
        console.log("We have " + res.length + " posts.");
    });

    service.deleteById(id)
    service.update(id, "Updated Titel", "Updated Description")

}

main().then().catch(err => console.error(err))