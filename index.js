const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
require("dotenv").config();
const userInfo = require('./model/model')

const PORT = process.env.PORT || 5000;
const app = express();

// Connecting to mongodb database
mongoose.set('strictQuery', false);
mongoose.connect(process.env.dbURI)
    .then(result => {
        console.log('Connected to mongodb online');
        app.listen(PORT,() => console.log(`Running on port ${PORT}`))
    })
    .catch(err=>console.log(err))

// app.listen(PORT,() => {
//     console.log(`Running on port ${PORT}`);
//     if(!fs.existsSync('./data')){
//         fs.mkdir('./data', err =>{
//             if(err){
//                 console.log(err)
//             }else{console.log('Created')}
//         })
//     }
// })

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());



// Reading all data from the database
app.get('/loadrec', (req, res)=>{
    userInfo.find()
        .then(result=>{
            // console.log('Read all rec from mongodb database');
            res.send(result);
            // console.log(result)
        })
        .catch(err => console.log(err))
})


// Sending data to the database
app.post('/add-user', (req, res)=>{
    // console.log(req.body);
    const info = new userInfo(req.body);
    info.save()
        .then(result=>{
            res.send(result)
            // console.log('Saved to mongodb database')
        })
        .catch(err => console.log(err))
})

// Counting data to the database
app.post('/count', (req, res)=>{
    userInfo.find(req.body).count()
        .then(result=>{
            res.send(`${result}`);
        })
        .catch(err => console.log(err))
})
