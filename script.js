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
    const randomDate = new Date();
    const dooms = ['monkey uprising', 'lizard people', 'alien invasion', 'meteors', 'deadly pandemic', 'nuclear war', 'zombie apocalypse', 'rogue AI', 'natural disasters', 'climate change', 'black hole', 'killer clowns', 'eldritch gods'];
    if (randomDate.endsWith(1) && randomDate.day != 11) {
        document.getElementById("line1").innerHTML = `On the ${randomDate.day}st of ${randomDate.monthToString()}, ${randomDate.year}`;
    }
    else if (randomDate.endsWith(2) && randomDate.day != 12) {
        document.getElementById("line1").innerHTML = `On the ${randomDate.day}nd of ${randomDate.monthToString()}, ${randomDate.year}`;
    }
    else if (randomDate.endsWith(3) && randomDate.day != 13) {
        document.getElementById("line1").innerHTML = `On the ${randomDate.day}rd of ${randomDate.monthToString()}, ${randomDate.year}`;
    }
    else {
        document.getElementById("line1").innerHTML = `On the ${randomDate.day}th of ${randomDate.monthToString()}, ${randomDate.year}`;
    }
    const doom = dooms[Math.floor(Math.random()*dooms.length)];
    document.getElementById("line2").innerHTML = `The world will end by ${doom}.`;
    const image = document.createElement("img");
    switch (doom) {
        case 'monkey uprising': 
            image.src = "./images/monkey.jpg";
            break;
        case 'lizard people':
            image.src = "./images/lizard.png";
            break;
        case 'alien invasion':
            image.src = "./images/alien.gif";
            break;
        case 'meteors':
            image.src = "./images/meteor.jpg";
    }
    document.getElementById("line2").after(image);
    document.getElementById("line3").innerHTML = `The likelihood is ${Math.floor(Math.random()*101)}%.`;
}

doomsdayMessage();

