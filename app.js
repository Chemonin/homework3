const express = require('express');
const path = require('path')
const router = require('./routes');

const app = express();
app.set('views', path.join(__dirname, 'source/template'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/',  require('./routes/index'));


app.listen(8080, () => {
    console.log(path.join(__dirname, 'source/template'));
    console.log('my server started');
})