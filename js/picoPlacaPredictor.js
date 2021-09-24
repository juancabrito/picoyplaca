const rules = {
    prohibition: {
        // Prohibition by day: 0 = Sunday, 1 = Monday, 2 = Tuesday, and so on
        1: [0,1,2,3],
        2: [2,3,4,5],
        3: [4,5,6,7],
        4: [6,7,8,9],
        5: [0,1,8,9]
    },
    expiration: 'Sep 30, 2021',
    hours: ['07:00','19:00']
}

const messages = {
    go: 'You can ride all day',
    noGo: 'You can not ride',
    canGo: 'You can ride',
    noRulesYet: 'Rules for this date are yet to be set'
}

function Plate(number) {
    this.number = number;
    this.getLastDigit = function() {
        return this.number.slice(n.length - 1);
    }
}

function predict(number, date, time) {
    let dateToPredict = new Date(date);
    let rulesExp = new Date(rules.expiration);
    let day = dateToPredict.getDay().toString();
    console.log(day);

    if (dateToPredict > rulesExp) {
        // Rules expired
        return displayMessage('noRulesYet'); 
    } else if (time >= rules.hours[0] && time < rules.hours[1]) {
        // Between restriction hours
        if (Object.keys(rules.prohibition).includes(day)) {
            if (rules.prohibition[day].includes(number)) {
                // Plate isn't allowed to ride
                return displayMessage('noGo');
            } else {
                // Plate is allowed to ride
                return displayMessage('canGo');
            }
        } else {
            // Date is weekend day
            return displayMessage('go');
        }
        
    } else {
        return displayMessage('canGo');
    }
}

function displayMessage(key) {
    console.log(messages[key])
}

predict(4, 'Sep 21, 2021', '05:00'); // Can ride
predict(4, 'Sep 21, 2021', '07:00'); // Can't ride
predict(4, 'Sep 21, 2021', '08:00'); // Can't ride
predict(4, 'Sep 21, 2021', '19:00'); // Can ride
predict(4, 'Sep 21, 2021', '21:30'); // Can ride
predict(4, 'Sep 21, 2021', '00:00'); // Can ride