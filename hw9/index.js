function setValueLegs() {
    let valuesLegs = prompt('Input values of legs (put a space between values)').split(' ');
    
    while(valuesLegs.length != 2) {
        valuesLegs = prompt('Error: incorrect length of legs (default value is 2). Input new values').split(' ');
    }

    for(let i = 0; i < valuesLegs.length; ++i) {
        while(isNaN(valuesLegs[i]) || valuesLegs[i] <= 0) {
            valuesLegs[i] = prompt('Error: not valid value for leg (number > 0). Input new value for leg');
        }
    }

    return valuesLegs;
}

function sqrt(number) {
    let i = 1;

    while (!(i * i > number)) {
        ++i;
    }

    return i;
}

function hypotenuseWithMath(firstLeg, secondLeg) {
    return Math.sqrt(Math.pow(firstLeg, 2) + Math.pow(secondLeg, 2)).toFixed(2);
}

function hypotenuseWithoutMath(firstLeg, secondLeg) {
    return sqrt((firstLeg * firstLeg + secondLeg * secondLeg).toFixed(0));
}

const valuesLegs = setValueLegs();

alert(`Result with Math is ${hypotenuseWithMath(valuesLegs[0], valuesLegs[1])}\nResult without Math ~ ${hypotenuseWithoutMath(valuesLegs[0], valuesLegs[1])} (for natural number)`);