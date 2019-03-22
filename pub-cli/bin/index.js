#!/usr/bin/env node
var program = require('commander');

program
    .version('1.0.0')
    .option('-l, --list', 'Get the pubs list')
    .option('-2, --opened', 'Get the open pubs list')
    .parse(process.argv);
if (program.list) {
    var listPubs = require('../src/main').getListPub;
    listPubs().map(function(element) {
       console.log(element);
    });
}
if(program.opened){
    var listOpenPubs = require('../src/main').getListOpenPub();
    console.log(listOpenPubs);
    /*listOpenPubs().forEach(function(element) {
        console.log(element);
    });*/
}