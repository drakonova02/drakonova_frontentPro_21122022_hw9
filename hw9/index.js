function setValueLegs() {
    let valuesLegs = prompt('Input values of legs (put a space between values)');
    let valuesLegsArr = valuesLegs ? valuesLegs.split(' ') : [];
    
    while(valuesLegsArr.length !== 2) {
        valuesLegs = prompt('Error: incorrect length of legs (default value is 2). Input new values');
        valuesLegsArr = valuesLegs ? valuesLegs.split(' ') : [];
    }

    for(let i = 0; i < valuesLegsArr.length; ++i) {
        while(isNaN(valuesLegsArr[i]) || valuesLegsArr[i] <= 0) {
            valuesLegsArr[i] = prompt('Error: not valid value for leg (number > 0). Input new value for leg');
        }
    }

    return valuesLegsArr;
}

function sqrt(number) {
    let i = 1;

    while (i * i < number) {
        ++i;
    }

    return i;
}

function hypotenuseWithMath(firstLeg, secondLeg) {
    return Math.sqrt(Math.pow(firstLeg, 2) + Math.pow(secondLeg, 2)).toFixed(2);
}

function hypotenuseWithoutMath(firstLeg, secondLeg) {
    return sqrt(firstLeg ** 2 + secondLeg ** 2);
}

const valuesLegs = setValueLegs();

alert(`Result with Math is ${hypotenuseWithMath(valuesLegs[0], valuesLegs[1])}\nResult without Math ~ ${hypotenuseWithoutMath(valuesLegs[0], valuesLegs[1])}`);