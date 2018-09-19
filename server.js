const express = require('express');
const bodyParser = require('body-parser');
const app     = express();
const mongoose = require('mongoose');

//connect to mlab
mongoose.connect("mongodb://admin:admin12@ds261302.mlab.com:61302/cash-api", {
    useNewUrlParser: true
})
app.use(bodyParser.json());   
const product = require('./controllers/product')(app)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('server is listening....')
})