const express=require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.use("/getBooks", require('./get'));
app.use("/getBooks", require('./post'));
app.use("/getBooks", require('./update'));
app.use("/getBooks", require('./delete'));





//port number
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});







// //getting all books
// app.get("/getBooks",(req,res)=>{
//     res.send(books);
// });
// //getting required book
// app.get("/getBook/:id",(req,res)=>{
//     res.json(books.filter(book => book.id===parseInt(req.params.id)));
// });

// //adding books
// app.post("/addBook",(req,res)=>{
//     var newBook={
//         id:req.body.id,
//         name:req.body.name
//     };

//     books.push(newBook);
//     res.send(books);

// });
// //updating the book
// app.put("/getBooks/:id",(req,res)=>{
//     const updBook=req.body;
//     books.forEach(book =>{
//         if(book.id===parseInt(req.body.id)){
//             book.id=updBook.id? updBook.id:book.id;
//             book.name=updBook.name ? updBook.name : book.name;
//             res.json("msg: updated",book);
//         }
//     });
// });

// //delete a book
// app.delete("/getBooks/:id",(req,res)=>{
//     res.json(books.filter(book => book.id!==parseInt(req.params.id)));
// })


