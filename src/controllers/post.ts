import { Post } from '../models/post'
import { User } from '../models/user'
import { Category } from '../models/category'

export class PostController {
    /**
 * PUT /addPostToCategory
 * query string
 * postId string
 * categoryId string
 */
    public addPostToCategory = async (req, res) => {
        const { id, categoryId } = req.params

        try {
            const category = await Category.findById(categoryId)

            if (!category) return res.status(404).json({ message: 'Category not found' })

            const post = await Post.findByIdAndUpdate({ _id: id }, {
                categories: [
                    { _id: categoryId }
                ]
            },
                { new: true }
            )

            if (!post) return res.status(404).json({ message: 'Post not found' })
            return res.status(200).json(post)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    /**
     * GET /feed
     */
    public  feed = async (req, res) => {
        try {
            const { searchString, skip, take } = req.query

            const or = searchString !== undefined ? {
                $or: [
                    { title: { $regex: searchString, $options: "i" } },
                    { content: { $regex: searchString, $options: "i" } },
                ]
            } : {}

            const feed = await Post.find(
                {
                    ...or,
                    published: true,
                },
                null,
                {
                    skip,
                    batchSize: take,
                }
            )
                .populate({ path: 'author', model: User })
                .populate('categories')

            return res.status(200).json(feed)
        } catch (error) {
            return res.status(500).json(error)

        }
    }

    /**
     * POST /post
     * body
     * title: string - required
     * content: string
     * authorEmail: string
     */
    public createDraft = async (req, res) => {
        const { title, content, authorEmail } = req.body

        try {
            const author = await User.findOne({ email: authorEmail })

            if (!author) return res.status(404).json({ message: 'Author not found' })

            const draft = await Post.create({
                title,
                content,
                author: author._id,
            })

            res.status(201).json(draft)
        } catch (error) {
            return res.status(500).json(error)
        }
    }


    /**
     * GET /post/:id
     * query string
     * id
     */
    public getPostById = async (req, res) => {
        const { id } = req.params

        try {
            const post = await Post.findById(id)
                .populate({ path: 'author', model: User })
                .populate('categories')

            if (!post) return res.status(404).json({ message: "Post not found" })

            return res.status(200).json(post)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    /**
     * PUT post/:id
     * publish post
     * query param string
     */
    public publishDraft = async (req, res) => {
        const { id } = req.params

        try {
            const post = await Post.findByIdAndUpdate(id, { published: true }, { new: true })

            if (!post) return res.status(404).json({ message: "Post not found" })
            return res.status(200).json(post)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    /**
     * POST /category
     * body
     * name: string
     */
    public createCategory = async (req, res) => {
        const { name } = req.body

        try {
            const category = await Category.create({ name })

            return res.status(201).json(category)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}