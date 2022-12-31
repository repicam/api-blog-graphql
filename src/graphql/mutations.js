import { GraphQLString } from 'graphql'
import { User } from '../models/index.js'
import { hashPassword } from '../utils/bcrypt.js'

export const register = {
  type: GraphQLString,
  description: 'Register a new user',
  args: {
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    displayName: { type: GraphQLString }
  },
  resolve: async (_, args) => {
    const { username, email, password, displayName } = args

    const hashedPassword = await hashPassword(password)

    await User.create({ username, email, password: hashedPassword, displayName })
    return 'New user created'
  }
}
