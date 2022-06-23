const bookSchema = require('../models/book');
const express = require('express');
const router = express.Router();
//getting all books from database
router.get('/',async(req,res)=>{
    try{
        const books = await bookSchema.find();
        res.json(books);
    } catch(err){
        res.send('err ',err);
    }
});
//getting required book based on id of book
router.get('/:id',async(req,res)=>{
    try{
        const book = await bookSchema.findById(req.params.id);
        res.json(book);
    } catch(err){
        res.send('err ',err);
    }
});


module.exports=router;