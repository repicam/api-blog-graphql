import { Schema, model } from 'mongoose'

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  authorId: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
})

export const Post = model('Post', postSchema)
