// Checks if time is in restriction range
function checkTimeInRange(boundaries, time) {
    return (time >= boundaries[0] && time < boundaries[1]);
}

// Checks if rules are in force
function checkRulesExpiration(expiration, date) {
    let dateToPredict = date + "T05:00:00Z";
    dateToPredict = new Date(dateToPredict);
    let rulesExp = new Date(expiration);

    return dateToPredict < rulesExp;
}

// Checks if licence plate number is among the restricted ones
function checkIfRestricted(daysList, prohibition, number, date) {
    let dateToPredict = date + "T05:00:00Z";
    dateToPredict = new Date(dateToPredict);
    let day = dateToPredict.getDay().toString();

    return isRestricted(daysList, prohibition, number, day);
}

function isRestricted(daysList, prohibition, number, day) {
    if (Object.keys(daysList).includes(day)) {
        return prohibition[daysList[day]].includes(number);
    } else {
        return false;
    }
}

function displayMessage(message, responseContainer) {
    responseContainer.innerHTML = message;
}

function assignMessage(messages, value) {
    let message = '';
    
    switch(value) {
        case true:
            message = messages['canGo'];
            break;
        case false:
            message = messages['noGo'];
            break;
        case null:
            message = messages['noRulesYet'];
            break;
        case 'invalidPlate':
            message = messages['invalidPlate'];
            break;
    }
    return message;
}
