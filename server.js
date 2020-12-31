
const http    = require('http');
const express   =   require('express');
const bodyParser = require('body-parser');
//create express app
const app = express();

//Require module
    // const productRoute = require('./product/products');

//  parse requests of content-type-application
app.use(bodyParser.urlencoded({extended : false}));

//parse requests of content -type-application/json
app.use(bodyParser.json());
//configuring the database
const dbConfig = require('./config/database.config')
const mongoose = require('mongoose');
//Using Native promises
mongoose.promise = global.promise;

// connecting the database
mongoose.connect(dbConfig.url,{
    useNewUrlParser : true
}).then(()=>{
    console.log('Successfully connected to the database');
}).catch(err=>{
    console.log('Could not connect to the database ...',err);
    process.exit();
})
//this is new repositories
//Handling routes
//app.use('/product',productRoute);

    //require Notes routes
    require('../CRUD_REST_API/app/routes/note.routes')(app);

//Listening on port
app.listen(3000,()=>{
    console.log('server run and listen on port 3000');
})