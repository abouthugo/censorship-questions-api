import { Schema, model } from 'mongoose'

const Question = model("Question", new Schema({
    prompt: {type: String, requires: "Prompt cannot be blank!"},
    choices: {type: Array, default: []},
    answers: {type: [{}]},
}))

export {Question}