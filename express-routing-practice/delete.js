const express=require('express');
const books = require('./books');

const router =express.Router();
//delete a book

router.delete("/:id",(req,res)=>{
    res.json(books.filter(book => book.id !==parseInt(req.params.id)));
});

module.exports=router;