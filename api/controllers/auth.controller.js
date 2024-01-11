import User from '../models/user.model.js'
import bcrypt from 'bcrypt'

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body
    const hatchedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hatchedPassword })
    try {
        await newUser.save()
        res.status(201).json("User created successfully")

    } catch (error) {
        next(error)
    }
} 