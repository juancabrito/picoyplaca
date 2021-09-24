function Plate(number) {
    this.number = number;
    this.getLastDigit = function() {
        return parseInt(this.number.slice(number.length - 1));
    }
}

function predict(number, date, time) {
    if (checkRulesExpiration(rules.expiration, date)) {
        if (checkTimeInRange(rules.hours, time) && checkIfRestricion(days, rules.prohibition, number, date)) {
            // Can not be on the road
            return false;
        } else {
            // Can be on the road
            return true;
        }
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
    let value = predict(plateToSearch.getLastDigit(), date, time);

    displayMessage(assignMessage(messages, value), response);

    // Running tests
    runTests(tests);
}
