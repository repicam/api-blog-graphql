import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema } from './graphql/schema.js'
import { config } from 'dotenv'

config()
const app = express()
const PORT = process.env.PORT || 3000

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
