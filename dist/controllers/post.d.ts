export declare class PostController {
    /**
 * PUT /addPostToCategory
 * query string
 * postId string
 * categoryId string
 */
    addPostToCategory: (req: any, res: any) => Promise<any>;
    /**
     * GET /feed
     */
    feed: (req: any, res: any) => Promise<any>;
    /**
     * POST /post
     * body
     * title: string - required
     * content: string
     * authorEmail: string
     */
    createDraft: (req: any, res: any) => Promise<any>;
    /**
     * GET /post/:id
     * query string
     * id
     */
    getPostById: (req: any, res: any) => Promise<any>;
    /**
     * PUT post/:id
     * publish post
     * query param string
     */
    publishDraft: (req: any, res: any) => Promise<any>;
    /**
     * POST /category
     * body
     * name: string
     */
    createCategory: (req: any, res: any) => Promise<any>;
}
