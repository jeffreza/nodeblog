const express = require("express");
const app = express();
const articleRouter = require("./routes/articles");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  try {
    const articles = [
      {
        title: "test article",
        createdAt: new Date(),
        description: "test description",
      },
      {
        title: "test article2",
        createdAt: new Date(),
        description: "test description",
      },
    ];
    res.render("articles/index", { articles: articles });
  } catch (error) {
    console.log(error);
  }
});
app.use("/articles", articleRouter);
app.listen(5000);
