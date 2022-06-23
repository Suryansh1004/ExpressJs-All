var express =require('express');
var app = express();
var bodyParser = require('body-parser');
var cors =require('cors');
let books=[];
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/book', (req, res) => {
    // Adding a book to database
    const book = req.body;
    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});
app.get('/books', (req, res) => {
    res.json(books);
});
app.get('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;

    // Searching books for the isbn
    for (let book of books) {
        if (book.isbn === isbn) {
            res.json(book);
            return;
        }
    }

    // Sending 404 when not found something is a good practice
    res.status(404).send('Book not found');
});
app.delete('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;

    // Remove item from the books array
    books = books.filter(i => {
        if (i.isbn !== isbn) {
            return true;
        }
        return false;
    });

    res.send('Book is deleted');
});
app.listen(3000,()=>{
    console.log("server is running");
})