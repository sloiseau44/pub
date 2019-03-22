const pubs = require('./pubs.json');
const model = require('../model/model');

function listPubs(){

    return pubs.map((element) => {
        let beers = [];
        element.beers.map((b)=> beers.push(b));

        let pub = new model.pub(element.name,
            new model.owner(element.firstName, element.lastName, element.mail),
            element.openDays,
            new model.openHours(element.openHours.start, element.openHours.end),
            beers);
        return pub;


    });

}

module.exports={
    listPubs:listPubs
}