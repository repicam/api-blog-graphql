import { verifyToken } from '../utils/auth.js'

export function authenticate (req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]

  try {
    const verifiedToken = verifyToken(token)
    req.verifiedUser = verifiedToken.user
  } catch (error) {
    console.log(error)
  }

  next()
}
