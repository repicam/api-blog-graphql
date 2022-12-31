import { GraphQLString } from 'graphql'
import { User } from '../models/index.js'
import { comparePassword, hashPassword } from '../utils/bcrypt.js'
import { createToken } from '../utils/auth.js'

export const register = {
  type: GraphQLString,
  description: 'Register a new user and returns a token',
  args: {
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    displayName: { type: GraphQLString }
  },
  resolve: async (_, args) => {
    const { username, email, password, displayName } = args

    const hashedPassword = await hashPassword(password)

    const newUser = await User.create({ username, email, password: hashedPassword, displayName })

    return createToken({ _id: newUser._id, username: newUser.username })
  }
}

export const login = {
  type: GraphQLString,
  description: 'Login a user and returns a token',
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve: async (_, args) => {
    const { email, password } = args

    const user = await User.findOne({ email }).select('+password')

    const correctPassword = await comparePassword(password, user.password)

    if (!user || !correctPassword) throw new Error('Invalid credentials!')

    return createToken({ _id: user._id, username: user.username })
  }
}
