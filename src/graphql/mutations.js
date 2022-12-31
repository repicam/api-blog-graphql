import { GraphQLString } from 'graphql'
import { User } from '../models/index.js'

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
    await User.create({ username, email, password, displayName })
    return 'New user created'
  }
}
