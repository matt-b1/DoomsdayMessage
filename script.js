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
    const doom = ['monkey uprising', 'lizard people', 'alien invasion', 'meteor shower', 'deadly pandemic', 'nuclear war', 'zombie apocalypse', 'rogue AI', 'natural disasters', 'climate change', 'black hole', 'killer clowns', 'eldritch gods'];
    return `The world will end by ${doom[Math.floor(Math.random()*doom.length)]}`;
}


const randomDate = new Date();
if (randomDate.endsWith(1) && randomDate.day != 11) {
    console.log(`On the ${randomDate.day}st of ${randomDate.monthToString()}, ${randomDate.year}`);
}
else if (randomDate.endsWith(2) && randomDate.day != 12) {
    console.log(`On the ${randomDate.day}nd of ${randomDate.monthToString()}, ${randomDate.year}`);
}
else if (randomDate.endsWith(3) && randomDate.day != 13) {
    console.log(`On the ${randomDate.day}rd of ${randomDate.monthToString()}, ${randomDate.year}`);
}
else {
    console.log(`On the ${randomDate.day}th of ${randomDate.monthToString()}, ${randomDate.year}`);
}
console.log(doomsdayMessage());