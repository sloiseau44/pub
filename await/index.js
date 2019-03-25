const fsExtra = require('fs-extra');
const fs = require('fs');
const file = './Temp';
const pubsJson = require('pub/mocks/pubs.json');


async function testAwait(){
    try {
        const exist = await fsExtra.pathExists(file);
        if(exist) await fs.remove(file);
        await fsExtra.ensureDir(file);
        await fsExtra.writeJson("./Temp/pubs.json", pubsJson);
        await (fs.watchFile("./Temp/pubs.json", (curr, prev) => {
            console.log(`${"./Temp/pubs.json"} file Changed`)}));

    } catch (e) {
        console.log(e);
    }

}

testAwait();





/* .then((exists) =>{
        if(exists){
            return fsExtra.remove(file);
        }
        return;

    })
        .then(()=> {return fsExtra.ensureDir(file)})
        .then(()=> {return fsExtra.writeJson("./Temp/pubs.json", pubsJson)})
        .then(()=> (fs.watchFile("./Temp/pubs.json", (curr, prev) => {
            console.log(`${"./Temp/pubs.json"} file Changed`);*/