'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _otherConfigJson = require('../other/config.json');

var _utilsDataBaseUtils = require('./utils/DataBaseUtils');

var db = _interopRequireWildcard(_utilsDataBaseUtils);

// Initialization of express application
var app = (0, _express2['default'])();

// Set up connection of database
db.setUpConnection();

// Using bodyParser middleware
app.use(_bodyParser2['default'].json());

// Allow requests from any origin
app.use((0, _cors2['default'])({ origin: '*' }));

// RESTful api handlers
app.get('/articles', function (req, res) {
    db.listArticles().then(function (data) {
        return res.send(data);
    });
});

app.post('/article', function (req, res) {
    db.createArticle(req.body).then(function (data) {
        return res.send(data);
    });
});

app['delete']('/article/:id', function (req, res) {
    db.deleteArticle(req.params.id).then(function (data) {
        return res.send(data);
    });
});

var server = app.listen(_otherConfigJson.serverPort, function () {
    console.log('Server is up and running on port ' + _otherConfigJson.serverPort);
});

//# sourceMappingURL=app-compiled.js.map