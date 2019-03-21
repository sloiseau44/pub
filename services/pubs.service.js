var pubs = require('../mocks/pubs.json')

function listPubs (){
    pubs.forEach(function(element) {
        console.log(element.name);
    });
}

module.exports = listPubs;