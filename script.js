class Date {
    constructor() {
        let daysInMonth = [31,29,31,30,31,30,31,31,30,31,30,31];
        let generatedYear = 0;
        while (generatedYear < 2022) {
            generatedYear = Math.floor(Math.random() * 2500);
        } 
        this._year = generatedYear;
        this._month = Math.floor(Math.random()*12 + 1);
        this._day = Math.ceil(Math.random()*daysInMonth[this._month - 1]);
    }

    get day(){
        return this._day;
    }

    get month(){
        return this._month;
    }

    get year(){
        return this._year;
    }

    monthToString() {
        switch (this._month) {
            case 1:
                return 'January';
            case 2:
                return 'February';
            case 3:
                return 'March';
            case 4:
                return 'April';
            case 5:
                return 'May';
            case 6:
                return 'June';
            case 7:
                return 'July';
            case 8:
                return 'August';
            case 9:
                return 'September';
            case 10:
                return 'October';
            case 11:
                return 'November';
            case 12:
                return 'December';
        }
    }

    endsWith(number) {
        const dateString = this._day.toString();
        if (dateString[dateString.length - 1] == number) {
            return true;
        }
        else {
            return false;
        }
    }
}

function doomsdayMessage() {
    imageLink.style.pointerEvents = "none";
    const randomDate = new Date();
    const dooms = ['monkey uprising', 'lizard people', 'alien invasion', 'meteors', 'deadly pandemic', 'nuclear war', 'zombie apocalypse', 'rogue AI', 'natural disasters', 'climate change', 'black holes', 'killer clowns', 'eldritch gods'];
    const dateInput = document.getElementById("date-input");
    if (randomDate.endsWith(1) && randomDate.day != 11) {
        dateInput.innerHTML = `${randomDate.day}st of ${randomDate.monthToString()}, ${randomDate.year}`;    
    }
    else if (randomDate.endsWith(2) && randomDate.day != 12) {
        dateInput.innerHTML = `${randomDate.day}nd of ${randomDate.monthToString()}, ${randomDate.year}`;    
    }
    else if (randomDate.endsWith(3) && randomDate.day != 13) {
        dateInput.innerHTML = `${randomDate.day}rd of ${randomDate.monthToString()}, ${randomDate.year}`;    
    }
    else {
        dateInput.innerHTML = `${randomDate.day}th of ${randomDate.monthToString()}, ${randomDate.year}`;    
    }
    const doom = dooms[Math.floor(Math.random()*dooms.length)];
    const doomInput = document.getElementById("doom-input");
    doomInput.innerHTML = `${doom}.`;
    switch (doom) {
        case 'monkey uprising': 
            image.src = "./images/monkey.jpg";
            image.alt = "An intimidating monkey";
            break;
        case 'lizard people':
            image.src = "./images/lizard.png";
            image.alt = "One very angry lizard";
            break;
        case 'alien invasion':
            imageLink.style.pointerEvents = "auto";
            imageLink.href = "https://www.youtube.com/watch?v=7kg3t_--3ds";
            image.src = "./images/alien.gif";
            image.alt = "What a true alien invasion would look like";
            break;
        case 'meteors':
            image.src = "./images/meteor.jpg";
            image.alt = "A lot of space rocks";
            break;
        case 'deadly pandemic':
            image.src = "./images/plague.jpg";
            image.alt = "Boys' night out";
            break;
        case 'nuclear war':
            image.src = "./images/war.jpg";
            image.alt = "A mushroom cloud";
            break;
        case 'zombie apocalypse':
            image.src = "./images/zombies.jpg";
            image.alt = "Previously on...";
            break;
        case 'rogue AI':
            image.src = "./images/robot.jpg";
            image.alt = "The robot uprising";
            break;
        case 'natural disasters':
            image.src = "./images/volcano.jpg";
            image.alt = "A volcano that erupted";
            break;
        case 'climate change':
            image.src = "./images/climatechange.jpg";
            image.alt = "The most likely scenario";
            break;
        case 'black holes':
            image.src = "./images/blackhole.jpg";
            image.alt = "Visual depiction of a black hole";
            break;
        case 'killer clowns':
            image.src = "./images/clown.jpg";
            image.alt = "An accurate representation of me";
            break;
        case 'eldritch gods':
            image.src = "./images/eldritch.png";
            image.alt = "PH'NGLUI MGLW'NAFH CTHULHU R'LYEH WGAH'NAGL FHTAGN";
            break;
    }
    document.getElementById("percentage").innerHTML = `${Math.floor(Math.random()*101)}%`;
}

doomsdayMessage();

