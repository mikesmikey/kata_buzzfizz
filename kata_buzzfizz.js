function doWork() {
    var count = 1

    while (count != 100) {
        console.log(fizzBuzz(count))
        count++;
    }

    return count;
}

function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num;
    }
}

module.exports = {
    doWork,
    fizzBuzz
}

doWork()