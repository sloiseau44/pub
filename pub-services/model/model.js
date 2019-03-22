class pub {
    constructor(name, owner, openDays, openHours, beers){
        this.name= name;
        this.owner = owner;
        this.openDays = openDays;
        this.openHours = openHours;
        this.beers = beers;
    }
}

class owner{
    constructor(firstName, lastName, mail){
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
    }
}

class openHours{
    constructor(start, end){
        this.start = start;
        this.end = end;
    }
}

class beer{
    constructor(type, name){
        this.type = type;
        this.name = name;
    }
}

module.exports = {
    pub:pub,
    owner:owner,
    openHours:openHours,
    beer:beer
}