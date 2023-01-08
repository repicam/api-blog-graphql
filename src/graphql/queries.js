import { GraphQLID, GraphQLList } from 'graphql'
import { PostType, UserType } from './types.js'
import { User } from '../models/User.js'
import { Post } from '../models/Post.js'

export const users = {
  type: new GraphQLList(UserType),
  description: 'List of users',
  resolve: () => User.find()
}

export const user = {
  type: UserType,
  description: 'Get a user by id',
  args: {
    id: { type: GraphQLID }
  },
  resolve: (_, args) => User.findById(args.id)
}

export const posts = {
  type: new GraphQLList(PostType),
  description: 'Get all posts',
  resolve: () => Post.find()
}

export const post = {
  type: PostType,
  description: 'Get a post by id',
  args: {
    id: { type: GraphQLID }
  },
  resolve: (_, args) => Post.findById(args.id)
}
