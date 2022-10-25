import { Task } from '../models/task.js';

export class DashBoardController {

    index = async(req, res) => {
        const tasks = await Task.find({});
        res.json(tasks);
    }


    store = async(req, res) => {
        const name = req.body.title;
        const newTask = new Task({
            name: name
        });

        try {
            await newTask.save();
            res.json({ "success": true, "message": "post saved successfully!" });
        } catch (error) {
            res.error(error)
        }
    }

    update = async(req, res) => {
        const task = req.params.task;
        const name = req.body.title;
        try {
            await Task.findByIdAndUpdate(task, { name: name })
            res.json({ 'success': true, "message": "Task updated succesfully" })
        } catch (error) {
            res.json({ 'success': false, "message": error.message })
        }
    }

    destroy = async(req, res) => {
        const task = req.params.task;
        try {
            await Task.deleteOne({ _id: task })
            res.json({ 'success': true, "message": "Task deleted succesfully" })
        } catch (error) {
            res.json({ 'success': false, "message": error.message })
        }
    }
}