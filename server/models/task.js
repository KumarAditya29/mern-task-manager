import mongoose from "mongoose";
const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String, 
            required: [true, "Task title is required"],
            trim: true,
            minLength: 3,
            maxLength: 100,
        },

        description: {
            type: String,
            trim: true,
            maxLength: 500,
        },

        completed: {
            type: Boolean,
            default: false,
        },

        priority: {
            type: String,
            enum: ["low", "medium", "high"],
            default: "medium",
        },

        dueDate: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;