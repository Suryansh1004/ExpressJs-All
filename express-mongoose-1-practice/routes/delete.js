const bookSchema = require('../models/book');
const express = require('express');
const router = express.Router();

//delete a particular book

router.delete('/:id',async(req,res)=>{
    try{
        const book = new bookSchema.remove(req.params.id);
        //book.bookPrice=req.body.bookPrice;
        const b1 =await book.remove();
        res.json(b1);
    }catch(err){
        res.send("Error")
    }
});

module.exports=router;