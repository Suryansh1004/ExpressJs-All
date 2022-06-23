const mongoClient=require('mongodb').MongoClient;
const assert=require('assert');
const Url="mongodb://localhost:27017";
const dbname='booksDB';
const client=new mongoClient(Url);
client.connect(function(err){
    assert.equal(null,err);
    console.log('connection made successfully');
    const db =client.db(dbname);
    insertDocuments(db,function(){
        client.close();
    })
});
//Adding Documents to collections:
const insertDocuments= function(db, callback){
    const collection = db.collection("books");
    collection.insertMany([
        {
            bookName:'wings of fire',
            bookAuthor:'APJ Abdul Kalam',
            bookPrice: 100 ,
            bookPublisher:'Jayand'
        },
        {
            bookName:'Enjoy the life',
            bookAuthor:'Shiva',
            bookPrice: 200 ,
            bookPublisher:'shiva'
        },
        {
            bookName:'Save Enery',
            bookAuthor:'RGV',
            bookPrice: 150 ,
            bookPublisher:'lyca'
        }
    ],function(err,result){
        assert.equal(err,null);
        console.log("inserted 3 documents into collections");
        callback(result);
    });
};

