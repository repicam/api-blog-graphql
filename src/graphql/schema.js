import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { hello } from './queries.js'
import { register, login } from './mutations.js'

const RootType = new GraphQLObjectType({
  name: 'RootType',
  description: 'Example',
  fields: {
    hello
  }
})

const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  description: 'The mutation type',
  fields: {
    register,
    login
  }
})

export const schema = new GraphQLSchema({
  query: RootType,
  mutation: MutationType
})
