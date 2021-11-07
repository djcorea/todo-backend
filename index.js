const express = require("express");
const momgoose = require("mongoose");
const cors = require("cors");

const PORT = 3030;
const app = express();
const todoRoutes = require("./routes/todoRoutes");
app.use(express.json());
app.use(cors());
                        
momgoose.connect("mongodb://localhost/todolist")
    .then(()=>{console.log("Conected Succesfully")})
    .catch((err)=>console.log(err));

app.use("/todos",todoRoutes);

app.listen(PORT, ()=>{
    console.log("Listening on port "+PORT);
});