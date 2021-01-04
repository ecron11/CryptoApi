const express = require('express');
const app = express();


//Serving the homepage
app.get('/', (req, res) => {
    res.send("This is the homepage")
})

app.listen(3000, () =>{
    console.log("Server is listening on port 3000");
})