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

// RESTful api handlers
app.get('/articles', (req, res) => {
    db.listArticles().then(data => res.send(data));
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
