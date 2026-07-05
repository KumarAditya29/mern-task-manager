import express from "express";
import cors from "cors";

import taskRoutes from "./routes/task.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("MERN Backend is Running 🚀");
});

export default app;