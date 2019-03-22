class Pub {
    constructor(name, Owner, openDays, OpenHours, beers){
        this.name= name;
        this.owner = owner;
        this.openDays = openDays;
        this.openHours = openHours;
        this.beers = beers;
    }
}

class Owner{
    constructor(firstName, lastName, mail){
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
    }
}

class OpenHours{
    constructor(start, end){
        this.start = start;
        this.end = end;
    }
}

class Beer{
    constructor(type, name){
        this.type = type;
        this.name = name;
    }
}

module.exports = {
    Pub:Pub,
    Owner:Owner,
    OpenHours:OpenHours,
    Beer:Beer
}