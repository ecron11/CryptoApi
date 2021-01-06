const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const hash = require('./hash.js');
const { createDigest } = require('./hash.js');
const { getHashes } = require('crypto');

require('dotenv').config();
const app = express();

//install the middleware
app.use(bodyParser.json());
app.use(cors());

//Serving the homepage
app.get('/', (req, res) => {
    res.send("This is the homepage")
})

//An endpoint for hashing
app.post('/api/createHash', (req, res) => {
    console.log("Received request");
    let input = req.body.input;

    let hashAlgo = req.body.hashAlgo

    try {
        let digest = createDigest(input, hashAlgo);
        res.json({
            'hexDigest': digest.hexDigest,
            'base64Digest': digest.base64Digest
        });
    } catch(error) {
        //If there is an error the algorithm is not supported
        console.log(error);
        res.json({
            'error': 'algorithm not supported'
        })
    }
   

})



//Checking the supported hashes
app.get('/api/checkHashes', (req, res) => {
    res.json({
        "Algorithms": getHashes()
    })
})

app.get('/api/test', (req, res)=> {
    console.log("test");
    res.send("test");
})

app.listen(process.env.PORT, () =>{
    console.log(`Server is listening on port ${process.env.PORT}`);
})

