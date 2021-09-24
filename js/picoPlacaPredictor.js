function Plate(number) {
    this.number = number;
    this.validatePlate = function() {
        return licencePlate.test(this.number);
    };
    this.getLastDigit = function() {
        return parseInt(this.number.slice(this.number.length - 1));
    }
}

function predict(number, date, time) {
    if (checkRulesExpiration(rules.expiration, date)) {
        return !(checkTimeInRange(rules.hours, time) && checkIfRestricted(days, rules.prohibition, number, date))
    } else {
        // Rules expired
        return null;
    }
}

function run() {
    let plate = document.getElementById('plate').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let response = document.getElementById('response');
    let plateToSearch = new Plate(plate);

    if (plateToSearch.validatePlate()) {
        let value = predict(plateToSearch.getLastDigit(), date, time);
        displayMessage(assignMessage(messages, value), response);
    } else {
        displayMessage(assignMessage(messages, 'invalidPlate'), response);
    }

    // Running tests
    runTests(tests);
}
