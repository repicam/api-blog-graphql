import jwt from 'jsonwebtoken'

export function createToken (user) {
  return jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  })
}
