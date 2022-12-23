import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { hello } from './queries'

const RootType = new GraphQLObjectType({
  name: 'RootType',
  description: 'Example',
  fields: {
    hello
  }
})

const schema = new GraphQLSchema({
  query: RootType
})

module.exports = schema
