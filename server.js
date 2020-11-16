const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoController = require('./controllers/todoController');

const app = express();

//
app.set('view engine', 'ejs')

// static use 
app.use(express.static('./public'))



// connect to mongodb 
mongoose.connect('mongodb+srv://ira:test@cluster0.bevnu.mongodb.net/<dbname>?retryWrites=true&w=majority', { useUnifiedTopology: true } , { useNewUrlParser: true } )
.then(() => console.log('MongoDb Connected...'))
.catch(err => console.log(err));



// todo controller 
todoController(app);
    
// Listen to a port
app.listen(5000)
console.log('Listenimg on port 5000')