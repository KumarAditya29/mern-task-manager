import Task from "../models/task.js";
import asyncHandler from "../utils/asyncHandler.js";

const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  
  res.status(200).json({
    success: true,
    count: tasks.length,
    data: tasks,
  });
});

const createTask = asyncHandler(async (req, res) => {
  const task = await Task.create(req.body);
  
  res.status(201).json({
    success: true,
    data: task,
  });
});

export { getAllTasks, createTask };