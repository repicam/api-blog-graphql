import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql'
import { User } from '../models/User.js'

export const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: 'User type',
  fields: {
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    displayName: { type: GraphQLString }
  }
})

export const PostType = new GraphQLObjectType({
  name: 'PostType',
  description: 'Post type',
  fields: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    author: {
      type: UserType,
      resolve (parent) {
        return User.findById(parent.authorId)
      }
    }
  }
})
