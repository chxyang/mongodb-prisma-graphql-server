export declare class UserController {
    /**
 * POST /user
 * name: string - optional
 * email: string - required
 */
    createUser: (req: any, res: any) => Promise<any>;
    /**
     * POST /user/:userId/profile
     *
     * req body
     * bio: string - required
     */
    setUserBio: (req: any, res: any) => Promise<any>;
    getAuthors: (req: any, res: any) => Promise<any>;
}
