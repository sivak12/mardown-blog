const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");
const app = express();

mongoose.connect("mongodb://localhost/blog");

app.set("view engine", "ejs");
app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test article",
      createdAt: new Date(),
      description: "Test description",
    },
    {
      title: "Test article 2",
      createdAt: new Date(),
      description: "Test description 2",
    },
  ];
  res.render("articles/index", { articles: articles });
});

app.listen(5000);
