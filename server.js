const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/request-routes');
const createPath = require('./helpers/createPath');

const app = express();

app.set('view engine', 'ejs');


const db = 'mongodb+srv://hryn_mariia:hryn_mariia@cluster0.fpcsa.mongodb.net/epam-marathon?retryWrites=true&w=majority';
mongoose
    .connect(db, {useNewUrlParser: true}, {useUnifiedTopology: true})
    .then((res) => console.log('Connected to DB'))
    .catch((error) => console.log(error));

app.listen(process.env.PORT || 5000, (error) => {
    error ? console.log(error) : console.log(`listening port ${process.env.PORT || 5000}`);
});

app.use(express.urlencoded({ extended: false }));

app.use(express.static('./css'));
app.use(express.static('./scripts'));
app.use(express.static('./img'));
app.use(routes);

app.get('/', (req, res) => {
    const title = 'Leave request';
    res.render(createPath('index'), { title });
});
