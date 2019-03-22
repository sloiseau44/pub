var services = require('pub/services/pubs.service');

function getListPub(){
    return services.listPubs();
}

function getListOpenPub(){
    console.log(services.listOpenPubs());
    return services.listOpenPubs();
}

module.exports= {
    getListPub: getListPub,
    getListOpenPub: getListOpenPub
}