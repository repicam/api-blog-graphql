import { GraphQLString } from 'graphql'

const hello = {
  type: GraphQLString,
  description: 'return a string',
  resolve: () => 'Hello string'
}

module.exports = { hello }
