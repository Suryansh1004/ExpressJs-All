const express=require('express');
const books = require('./books');

const router =express.Router();

//update a book

router.put("/:id",(req,res)=>{
    const updBook=req.body;
    books.forEach(book =>{
        if(book.id===parseInt(req.body.id)){
            book.id=updBook.id? updBook.id:book.id;
            book.name=updBook.name ? updBook.name : book.name;
            res.json("msg: updated",book);
        };
    });
});

module.exports=router;