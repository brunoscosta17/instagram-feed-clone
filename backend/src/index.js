const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://admin:471577@cluster0-ntbnq.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(require('./routes'));

app.listen(3333);