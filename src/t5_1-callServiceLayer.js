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
        /**
         * Create Post
         **/
        var id = await service.create("Test post", "Test description")
        console.log(typeof(parseInt(id)))

        /**
         * Get post by Id 
         **/
        const postById = await service.findById(parseInt(id))
        console.log("Post with " + id + ": " + JSON.stringify(postById))

        /**
         * Get post by Id 
         **/
        const all = await service.getAllPosts()
        console.log("All " + JSON.stringify(all))
        console.log("##########################")

        /**
         * Update Post
         **/
        const updateId = service.update(id, "Updated Titel", "Updated Description")
        console.log("Post with " + updateId + " got updated: " + JSON.stringify(updateId))

        /**
         * Delete Post
         **/
        const deletedPost = await service.deleteById(parseInt(id))
        console.log("Post with " + deletedPost + " got deleted: " + JSON.stringify(deletedPost))

    }
    catch (err) {
        console.log(err)
    }

    service.deleteById(id)
    service.update(id, "Updated Titel", "Updated Description")

}

main().then().catch(err => console.error(err))
