import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql'

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
