const bookSchema = require('../models/book');
const express = require('express');
const router = express.Router();

//update a particular book

router.patch('/:id',async(req,res)=>{
    try{
        const book = new bookSchema.findById(req.params.id);
        book.bookPrice=req.body.bookPrice;
        const b1 =await book.save();
        res.json(b1);
    }catch(err){
        res.send("Error")
    }
});

module.exports=router;