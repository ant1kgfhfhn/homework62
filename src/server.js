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
const publicPath = path.join(rootPath, "public");

// Configure Pug
app.set("view engine", "pug");
app.set("views", viewsPath);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logRequest);

// Static files
app.use(express.static(publicPath));
app.use("/styles", express.static(viewsPath));

// Home page
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HW 62</title>
        <link rel="stylesheet" href="/styles/styles.css">
      </head>
      <body>
        <main class="container">
          <h1>Express server is running!</h1>
          <p><a href="/users">Users</a></p>
          <p><a href="/articles">Articles</a></p>
        </main>
      </body>
    </html>
  `);
});

// Application routes
app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).send("Route not found.");
});

// Error handler
app.use(errorHandler);

// Start server locally; export app for Vercel
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

module.exports = app;
