const express = require("express");
const path = require("path");

const logRequest = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

const usersRoutes = require("./routes/usersRoutes");
const articlesRoutes = require("./routes/articlesRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

const rootPath = path.join(__dirname, "..");
const viewsPath = path.join(rootPath, "views");

app.set("view engine", "pug");
app.set("views", viewsPath);

app.use(logRequest);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/styles", express.static(viewsPath));

app.get("/", (req, res) => {
  res.send("Express server is running!");
});

app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);

app.use((req, res) => {
  res.status(404).send("Route not found.");
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
