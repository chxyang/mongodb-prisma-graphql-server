import express from "express"
import { PostController, UserController } from "./controllers"

export const router = async () => {
    const router = express.Router()
    const postController= new PostController()
    const userController = new UserController()
    /** 
 * Post routes
*/
    router.get('/feed', postController.feed)

    router.post('/post', postController.createDraft)

    router.get('/post/:id', postController.getPostById)

    router.put('/post/:id', postController.publishDraft)

    router.put('/post/:id/:categoryId', postController.addPostToCategory)

    /**
     * user routes
     */

    router.get('/authors', userController.getAuthors)

    router.post('/user', userController.createUser)

    router.post('/author/:id/profile', userController.setUserBio)

    /** Category routes */

    router.post('/category', postController.createCategory)
}