import { sign } from 'jsonwebtoken'

export function createToken (user) {
  return sign({ user }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  })
}
