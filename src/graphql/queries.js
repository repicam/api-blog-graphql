import { GraphQLList } from 'graphql'
import { UserType } from './types.js'
import { User } from '../models/User.js'

export const users = {
  type: new GraphQLList(UserType),
  description: 'List of users',
  resolve () {
    return User.find()
  }
}
