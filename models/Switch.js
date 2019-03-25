import { Schema, model } from 'mongoose'

const Switch = model("Switch", new Schema({
    name: {type: String},
    active: {type: Boolean, default: false},
}))

export {Switch}