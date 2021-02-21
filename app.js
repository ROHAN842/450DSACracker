const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

//Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Set static folder 
app.use(express.static(`${__dirname}/assets`));

//IndexRoute
app.get('/', (req, res) => {
    res.render('index');
});

//Array Route
app.get('/array', (req, res) => {
    res.render("array");
});

//Matrix Route
app.get('/matrix', (req, res) => {
    res.render("matrix");
});

//String Route
app.get('/string', (req, res) => {
    res.render("string");
});

//Searchsort Route
app.get('/Searchsort', (req, res) => {
    res.render("Searchsort");
});

//Linkedlist Route
app.get('/Linkedlist', (req, res) => {
    res.render("Linkedlist");
});

//Binarytree Route
app.get('/Binarytree', (req, res) => {
    res.render("Binarytree");
});

//BST Route
app.get('/BST', (req, res) => {
    res.render("BST");
});

//Greedy Route
app.get('/Greedy', (req, res) => {
    res.render("Greedy");
});

//Backtracking Route
app.get('/Backtracking', (req, res) => {
    res.render("Backtracking");
});

//Stacksqueue Route
app.get('/Stacksqueue', (req, res) => {
    res.render("Stacksqueue");
});

//Heap Route
app.get('/Heap', (req, res) => {
    res.render("Heap");
});

//Graph Route
app.get('/Graph', (req, res) => {
    res.render("Graph");
});

//Trie Route
app.get('/Trie', (req, res) => {
    res.render("Trie");
});

//Dynamicprog Route
app.get('/Dynamicprog', (req, res) => {
    res.render("Dynamicprog");
});

//Bitmanipulation Route
app.get('/Bitmanipulation', (req, res) => {
    res.render("Bitmanipulation");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});