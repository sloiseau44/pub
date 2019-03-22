var pubs = require('../mocks/pubs');
//var moment  = require('moment');


function listPubs(){
    var listPubs = [];
    pubs.listPubs().map((p) => {
        listPubs.push(p.name);
    });
    return listPubs;
}

/*function listOpenPubs(){
    var listPubs = [];
    pubs.forEach(function(element) {
        var openPub;
        var jourActuel = new Date().getDay();
        console.log(jourActuel);
        if(jourActuel===0){
            jourActuel='Monday';
        }else if(jourActuel===1){
            jourActuel='Tuesday';
        }else if(jourActuel===2){
            jourActuel='Wednesday';
        }else if(jourActuel===3){
            jourActuel='Thursday';
        }else if(jourActuel===4){
            jourActuel='Friday';
        }else if(jourActuel===5){
            jourActuel='Saturday';
        }else if(jourActuel===6){
            jourActuel='Sunday';
        }
        var heureActuel = new Date().getHours();
        if(element.openDays.indexOf(jourActuel)!=-1){
            console.log('heureActuel : '+heureActuel);
            console.log('fin :'+element.openHours.end);
            console.log('start :'+element.openHours.start);
            if(heureActuel<element.openHours.end && heureActuel>=element.openHours.start){
                console.log(element.name);
                listPubs.push(element.name);
            }
        }

    });

    return listPubs;
}*/

module.exports= {
    listPubs: listPubs,
    //listOpenPubs: listOpenPubs
}