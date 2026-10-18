const express = require("express");
const path = require("path");

const logRequest = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

const usersRoutes = require("./routes/usersRoutes");
const articlesRoutes = require("./routes/articlesRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(logRequest);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/styles", express.static(path.join(__dirname, "views")));

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
