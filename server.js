// Import express
const express = require("express");

// Import path
const path = require("path");

// PORT
const PORT = process.env.PORT || 8000;

// APP
const app = express();

// set ejs
app.set("view engine", "ejs");

// set public static files
app.use(express.static(path.join(__dirname, "public")));

// set home page
app.get("/", (req,res) => {
    return res.render("home")
})

// set testimonial page
app.get("/stories", (req,res) => {
    return res.render("stories")
})

// set team page
app.get("/team", (req,res) => {
    return res.render("team")
})

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});