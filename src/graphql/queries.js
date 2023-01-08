import { GraphQLID, GraphQLList } from 'graphql'
import { UserType } from './types.js'
import { User } from '../models/User.js'

export const users = {
  type: new GraphQLList(UserType),
  description: 'List of users',
  resolve: () => {
    return User.find()
  }
}

export const user = {
  type: UserType,
  description: 'Get a user by id',
  args: {
    id: { type: GraphQLID }
  },
  resolve: (_, args) => {
    return User.findById(args.id)
  }
}
