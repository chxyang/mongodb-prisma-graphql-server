import { Post, User } from "../models"


export class UserController{
    /**
 * POST /user
 * name: string - optional
 * email: string - required
 */
public createUser = async (req, res) => {
    const { name, email } = req.body
  
    try {
      const user = await User.create({
        name,
        email,
      })
  
      return res.status(201).json(user)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
  
  /**
   * POST /user/:userId/profile
   *
   * req body
   * bio: string - required
   */
  public setUserBio = async (req, res) => {
    const { id } = req.params
    const { bio } = req.body
  
    try {
      const user = await User.findByIdAndUpdate(
        id,
        { profile: { bio } },
        { new: true }
      )
  
      if (!user) return res.status(404).json({ message: 'Author not found' })
  
      return res.status(200).json(user)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
  
  public getAuthors = async (req, res) => {
    try {
      const users = await User.find({}).populate({ path: 'posts', model: Post })
  
      return res.status(200).json(users)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
  
}