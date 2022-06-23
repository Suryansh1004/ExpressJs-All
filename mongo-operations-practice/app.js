const MongoClient=require('mongodb').MongoClient;

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

//getting a book by it's name
async function run() {
  try {
    await client.connect();
    const database = client.db("booksDB");
    const books = database.collection("books");

    // Query for a book 
    const query = { bookName: "wings of fire" };
    const book = await books.findOne(query);

    // since this method returns the matched document, not a cursor, print it directly
    console.log(book);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

//updating a book
async function run() {
  try {
    await client.connect();

    const database = client.db("booksDB");
    const books = database.collection("books");
    const filter = { bookName: "Enjoy the life" };

    const options = { upsert: true };

    const updateDoc = {
      $set: {
        plot: `A harvest of random numbers, such as: ${Math.random()}`
      },
    };

    const result = await books.updateOne(filter, updateDoc, options);
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

//deleting a document
async function run() {
  try {
    await client.connect();

    const database = client.db("booksDB");
    const books = database.collection("books");
    const query = { bookName: "wings of fire" };

    const result = await books.deleteOne(query);
    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

//get the books price greater than 100
async function run() {
    try {
      await client.connect();
      const database = client.db("booksDB");
      const books = database.collection("books");
      const query = { bookPrice: { $gt: 100 } };
      const cursor = books.find(query);
      await cursor.forEach(console.dir);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);