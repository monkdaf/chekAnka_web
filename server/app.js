import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { serverPort } from '../other/config.json';

import * as db from './utils/DataBaseUtils';

// Initialization of express application
const app = express();

// Set up connection of database
db.setUpConnection();

// Using bodyParser middleware
app.use( bodyParser.json() );

// Allow requests from any origin
app.use(cors({ origin: '*' }));

// common request
app.get('/', (req, res) => {
    //let html = "<h1>Hello from daf</h1>"
    var options = {
        root: './',
        dotfiles: 'deny',
        };
    let filename='index.html';
    res.sendFile(filename, options, (err) => {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
        else {
            console.log('Sent:', options.root+filename);
        }
    });
    //app.static('../', index);
});


// RESTful api handlers
app.get('/articles', (req, res) => {
    db.listArticles().then(data => res.send(data));
});
//var html = "<p>"+"ddd"+"</p>";

app.get('/test', (req, res) => {
    db.listArticles().then(data => {
        var html="";
        data.forEach(function(item, i, arr) {
            html += "<p>" + item.name + "</p>";
        });
        res.send('<h1>daf</h1>'+html);
    });

    //res.send('<h1>daf</h1>');
});

app.get('/add-article', (req, res) => {
    var newdata={};
    newdata.available='yes';
    newdata.id = '999999';
    newdata.vendorCode = '9997';
    newdata.name = 'Тестовая запись №3';

    db.createArticle(newdata).then(data => res.send(data));
});


app.post('/article', (req, res) => {
    db.createArticle(req.body).then(data => res.send(data));
});

app.delete('/article/:id', (req, res) => {
    db.deleteArticle(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});
