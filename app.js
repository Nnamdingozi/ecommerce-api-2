'use strict'
require('dotenv').config();
const createError = require('http-errors')
const express = require('express');
const app = express();
// const path = require('path');
const PORT = 8080;
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoute');


app.use(express.json());
app.use(bodyParser.json());
app.use('/api', userRouter);
app.use(express.urlencoded({extended: false}));
//catch 404 error
app.use(function(req, res, next) {
next(createError(404));
});
//handle the error
app.use(function(err, req, res){
    //404 not found
    if(err.status === 404) {
        return res.status(404)
    }
//internal server error 505
if(req.app.get('env') !== 'development') {
    return res.status(505)
}
// set locals to provide error only in development
res.locals.message = err.message
res.locals.error = req.app.get('env') === 'development'? err : {}
res.status(err.status || 500)
});

app.get('/', (req, res) => {
    res.send('E-commerce API')
})

app.listen(PORT, () => {
    console.log(`Server listening on localhost:${PORT}`)
});

module.exports = app;