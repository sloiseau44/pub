const express = require('express');
const pubService = require('pub/services/pubs.service');
const app = express();
app.get('/pubs', function (req, res) {
    //const pubs = pubService......
    res.status(200).json();
})
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});