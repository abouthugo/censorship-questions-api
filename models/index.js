import mongoose from 'mongoose'
import { Question } from './Question'
const { DB_USER, PASSWD, DB } = process.env
const URL = `mongodb://${DB_USER}:${PASSWD}@${DB}`
mongoose.connect(
  URL,
  { useNewUrlParser: true }
)
mongoose.Promise = Promise

const getQuestions = () => Question.find()
const findQuestion = (_id) => Question.findById({_id})
export { getQuestions, findQuestion }
