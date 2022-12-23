import mongoose from 'mongoose'

const URIConnection = `mongodb+srv://${process.env.BBDD_USER}:${process.env.BBDD_PASS}@mybbdd.c3unr1n.mongodb.net/${process.env.BBDD_SCHEMA}?retryWrites=true&w=majority`

export async function connectDB () {
  await mongoose.connect(URIConnection)
  console.log('MongoDB connected')
}
