import express from "express";
import cors from "cors";

import taskRoutes from "./routes/task.routes.js";
import errorHandler from "./middleware/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("MERN Backend is Running 🚀");
});

app.use("/api/tasks", taskRoutes);
app.use(errorHandler);

export default app;