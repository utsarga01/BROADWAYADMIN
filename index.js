import express from "express";
import { print, printPink, printBlue } from "./utils/color.console.js";
import connectDB from "./database-connection/connect.db.js";
import adminRoutes from "./admin/admin.controller.js";
import courseRoutes from "./course/course.controller.js";
const app = express();

// to make app understand json

app.use(express.json());

//database connection
connectDB();

//register routes
app.use(adminRoutes);
app.use(courseRoutes);

//network port and server

const PORT = 8000;

app.listen(PORT, () => {
  console.log(printBlue(`App is listening on port ${PORT}`));
});
