var pubs = require('../mocks/pubs.json');

function listPubs(){
    var listPubs = [];
    pubs.forEach(function(element) {
        listPubs.push(element.name);
    });
    return listPubs;
}

module.exports= {
    listPubs: listPubs
}