const express = require('express')
const app = express();
require('dotenv').config();
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = process.env.PORT || 4000
const languages = require('./controllers/languages')




//=============================Middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const monogURI = process.env.DATABASE_URL;
const db = mongoose.connection;

//to get rid of depreciation warnings write the following
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
db.on('error', (err) => console.log(err.message + ' is Mongodb not running?'));
db.on('connected', () => console.log('mongo connected: ',monogURI));
db.on("disconnected", () => console.log('mongo disconnected'));
db.on( 'open', () =>{
    console.log("connection made")
})

//=============================Routes
const router = require('./controllers/languages')
app.use('/languages', router)

app.use("../languages.js", languages)

app.get('/', (req,res) => {
    res.send('does it work??')
})



//=============================Start Server
app.listen(PORT, () => {
    console.log('Devography listening on port 4k')
})
