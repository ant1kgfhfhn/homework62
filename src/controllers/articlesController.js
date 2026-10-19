const path = require("path");
const ejs = require("ejs");

const articles = [
  {
    id: 1,
    title: "Introduction to Node.js",
    content: "Node.js allows JavaScript to run outside the browser.",
  },
  {
    id: 2,
    title: "Understanding Express Middleware",
    content: "Middleware functions process requests before route handlers.",
  },
  {
    id: 3,
    title: "MVC Architecture",
    content:
      "MVC separates application logic into models, views and controllers.",
  },
];

function renderEjs(res, template, data) {
  const templatePath = path.resolve(
    process.cwd(),
    "views",
    "articles",
    template,
  );

  ejs.renderFile(
    templatePath,
    {
      ...data,
      theme: res.locals.theme || "light",
    },
    (error, html) => {
      if (error) {
        console.error("EJS rendering error:", error);
        return res.status(500).send("Failed to render article page.");
      }

      res.send(html);
    },
  );
}

function getArticles(req, res) {
  renderEjs(res, "index.ejs", { articles });
}

function getArticleById(req, res) {
  const article = articles.find(
    (item) => item.id === Number(req.params.articleId),
  );

  if (!article) {
    return res.status(404).send("Article not found.");
  }

  renderEjs(res, "show.ejs", { article });
}

module.exports = {
  getArticles,
  getArticleById,
};
