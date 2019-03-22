var services = require('pub/services/pubs.service');

function getListPub(){
    return services.listPubs();
}

module.exports= {
    getListPub: getListPub
}