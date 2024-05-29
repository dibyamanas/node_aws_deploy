const express = require('express');

const app = express();

app.get('/api/get', (req,res) => {
    res.send({message : 'Nodejs AWS Deployment'});
})

app.get('/api/get/user', (req,res) => {
    res.send({name : 'Dibya', email: 'dev@gmail.com', 'role': 'DevOps'});
})

app.get('/api/get/details', (req,res) => {
    res.send({name : 'Dev', email: 'dev@gmail.com'});
})

app.listen(9000, (req,res) => {
    console.log('server running on port 9000')
})
