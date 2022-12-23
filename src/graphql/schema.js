import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { hello } from './queries.js'

const RootType = new GraphQLObjectType({
  name: 'RootType',
  description: 'Example',
  fields: {
    hello
  }
})

export const schema = new GraphQLSchema({
  query: RootType
})
