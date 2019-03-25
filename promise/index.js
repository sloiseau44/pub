const fsExtra = require('fs-extra');
const fs = require('fs');
const file = './Temp';
const pubsJson = require('pub/mocks/pubs.json');


fsExtra.pathExists(file)
    .then((exists) =>{
        if(exists){
            return fsExtra.remove(file);
        }
        return;

    })
    .then(()=> {return fsExtra.ensureDir(file)})
    .then(()=> {return fsExtra.writeJson("./Temp/pubs.json", pubsJson)})
    .then(()=> (fs.watchFile("./Temp/pubs.json", (curr, prev) => {
        console.log(`${"./Temp/pubs.json"} file Changed`);
    })));

