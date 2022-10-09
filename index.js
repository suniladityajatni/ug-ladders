const axios = require('axios');
const express = require('express');
const cors = require('cors')
// const mongoose = require('mongoose');
const getProblems = require("./getProblems");


const app = express();
app.use(express.json())
app.use(cors());

let allProblems =[];

(async function () {
    allProblems=await getProblems();
})();

app.get("/server", (req, res) => {
    res.send("Hello")
})

app.get("/:rating",async (req,res) => {
    const rating = req.params.rating;
    console.log(rating);
    const json=allProblems.filter(problem => { return problem.rating==rating});
    console.log(json);
    res.send(json);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} ... `);
})


if(process.env.NODE_ENV === 'production')
{
    app.use(express.static("frontend/build"))
    const path=require("path");
    app.get("*",(req,res) => {
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'));
    })
}