const express = require('express')
const app = express();
require('dotenv').config();
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = process.env.PORT || 4000
const languages = require('./controllers/languages')
const comments = require('./controllers/comments')





//=============================Middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const monogURI = process.env.DATABASE_URL;
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
db.on('error', (err) => console.log(err.message + ' is Mongodb not running?'));
db.on('connected', () => console.log('mongo connected: ', "get 2 work"));
db.on("disconnected", () => console.log('mongo disconnected'));
db.on( 'open', () =>{
    console.log("connection made")
})

//=============================Routes
const langRouter = require('./controllers/languages')
app.use('/languages', langRouter)


const comRouter = require('./controllers/comments')
app.use('/comments', comRouter)


app.get('/', (req,res) => {
    res.send('does it work??')
})

app.get('/', (req,res) => {
    res.redirect('/languages')
})

//=============================Start Server
app.listen(PORT, () => {
    console.log('Devography listening on port 4k')
})
