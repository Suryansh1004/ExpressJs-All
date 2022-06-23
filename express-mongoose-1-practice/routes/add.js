const bookSchema = require('../models/book');
const express = require('express');
const router = express.Router();
//adding books to database
router.post('/', async(req,res)=>{
    const book = new bookSchema({
        bookName: req.body.bookName,
        bookAuthor: req.body.bookAuthor,
        bookPrice: req.body.bookPrice
    });
    try{
        const b1 = await book.save();
        res.json(b1);
    }catch(err){
        res.send("error")
    }
});

module.exports=router;