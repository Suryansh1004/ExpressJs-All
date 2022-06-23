const express=require('express');
const books = require('./books');

const router =express.Router();

//add a book
router.post("/",(req,res)=>{
   const book={
    id:req.body.id,
    name:req.body.name
   };
   books.push(book);
   res.json(books);
});

module.exports=router;