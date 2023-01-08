import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { users, user } from './queries.js'
import { register, login, createPost } from './mutations.js'

const RootType = new GraphQLObjectType({
  name: 'RootType',
  description: 'Example',
  fields: {
    users,
    user
  }
})

const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  description: 'The mutation type',
  fields: {
    register,
    login,
    createPost
  }
})

export const schema = new GraphQLSchema({
  query: RootType,
  mutation: MutationType
})
