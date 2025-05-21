import express from "express";
import cors from "cors";
import usersRouter from "./users";

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", usersRouter);

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
