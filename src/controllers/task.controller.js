import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
    const { title } = req.body;

    const task = await Task.create({ title });

    res.status(201).json(task);
};

export const getAllTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
};
