import jwt from 'jsonwebtoken'

export function createToken (user) {
  return jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  })
}

export function verifyToken (token) {
  return jwt.verify(token, process.env.JWT_SECRET)
}
