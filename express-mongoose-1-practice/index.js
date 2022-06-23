const express = require('express');
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://riddhi239:riddhi239@cluster0.y5jdn.mongodb.net/test");
const app =express();
const con =mongoose.connection;

con.on("open",()=>{
    console.log("connected to database");
});
app.use(express.json());
//routes
app.use("/getBooks",require('./routes/get'));
app.use("/addBooks",require('./routes/add'));
app.use("/updateBook",require('./routes/update'));
app.use("/deleteBook",require('./routes/delete'));
//local server
app.listen(3000,()=>{
    console.log("server running at 3000 port")
})