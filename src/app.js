import express from "express";
import cors from "cors";
import authRoutes from './routes/auth.routes.js';
import taskRoutes from "./routes/task.routes.js";
import authMiddleware from './middlewares/auth.middleware.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("Taskflow Pro API is running 🚀");
});

app.get("/api/protected", authMiddleware, (req, res) => {
    res.json({
        message: "Protected route accessed",
        user: req.user
    });
});

export default app;
