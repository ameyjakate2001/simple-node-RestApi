var express = require('express');
const routes = require('./Routes/API-Routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var app = express();

var cors = require('cors')
app.use(cors()) 


const port = process.env.PORT || 8000;



app.use(bodyParser.urlencoded({
    extended: true,
}))

app.use(bodyParser.json());
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


app.set('view engine','ejs')

//Connect To Mongodb
mongoose.connect('mongodb://localhost/RESTAPI', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
if (!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")


app.get('/', (req, res) => {
    res.render('Home');
})

app.use('/', routes);

app.listen(port, () => {
    console.log('listening to the port ' + port);
})
