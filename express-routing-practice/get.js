const express=require('express');
const books = require('./books');
const router =express.Router();

//get all books
router.get("/",(req,res)=>{
    res.json(books)
});
//get required book
router.get("/:id",(req,res)=>{
    res.json(books.filter(book =>  book.id === parseInt(req.params.id)))
})
module.exports=router;