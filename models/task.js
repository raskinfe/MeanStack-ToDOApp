import mongoose, { Schema } from "mongoose";

const taskcSChema = new Schema({
    name: {
        type: String,
    }
})

const Task = mongoose.model('Task', taskcSChema);

export { Task }