const express = require('express');
require('dotenv').config();
const router = require('./routes/index');
const app = express();
// const db_URL = 'mongodb+srv://admin:admin@cluster1.qihcabq.mongodb.net/?retryWrites=true&w=majority';
// const db_URL = 'mongodb://127.0.0.1:27017/instgram';
const db_URL = 'mongodb+srv://admin:admin@cluster1.qihcabq.mongodb.net/test';

const path = require('path');
app.use('/upload', express.static(path.join('upload')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api', router);
const mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.send('Test')
})

mongoose.connect(db_URL, {useNewUrlParser: true}).then(() => {
  console.log('Database connected', db_URL);
  app.listen(process.env.PORT || 5100, async () => {
    console.log(`server is running on port : ${process.env.PORT || 5100}`);
  });
}).catch((e)=>{
  console.log(e);
});