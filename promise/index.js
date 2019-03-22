const fs = require('fs-extra');
const file = './Temp';
const pubsJson = require('pub/mocks/pubs.json');


fs.pathExists(file)
    .then((exists) =>{
        if(exists){
            return fs.remove(file);
        }
        return;

    })
    .then(()=> {return fs.ensureDir(file)})
    .then(()=> {return fs.writeJson("./Temp/pubs.json", pubsJson)})

