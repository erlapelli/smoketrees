const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));



const path = require('path');


const connectDB = require('./db/connect')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  

// app.get('/',(req,res) => {
//     res.send('register the user with details')



const registerrouter = require('./routes/register')

app.use('/register', registerrouter)


const port = process.env.PORT || 3000;
const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI)
      console.log("connected")
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();